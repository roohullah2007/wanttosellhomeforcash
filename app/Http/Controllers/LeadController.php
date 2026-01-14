<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use App\Models\Setting;
use App\Mail\NewLeadNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class LeadController extends Controller
{
    public function store(Request $request)
    {
        // Verify reCAPTCHA if configured
        $recaptchaSecret = config('services.recaptcha.secret_key');
        if ($recaptchaSecret) {
            $recaptchaToken = $request->input('recaptcha_token');

            if (empty($recaptchaToken)) {
                return back()->withErrors(['recaptcha_token' => 'Please complete the reCAPTCHA verification.']);
            }

            $recaptchaValid = $this->verifyRecaptcha($recaptchaToken, $recaptchaSecret);
            if (!$recaptchaValid) {
                return back()->withErrors(['recaptcha_token' => 'reCAPTCHA verification failed. Please try again.']);
            }
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'nullable|email|max:255',
            'phone' => 'required|string|max:20',
            'property_address' => 'required|string|max:500',
            'message' => 'nullable|string|max:2000',
            'source' => 'nullable|string|max:50',
        ]);

        $lead = Lead::create($validated);

        // Send to Zapier webhook if enabled
        $this->sendToZapier($lead);

        // Send email notifications if enabled
        $this->sendEmailNotifications($lead);

        return redirect()->route('thank-you');
    }

    protected function sendToZapier(Lead $lead): void
    {
        try {
            if (!Setting::get('enable_zapier_webhook', false)) {
                return;
            }

            $webhookUrl = Setting::get('zapier_webhook_url', '');
            if (empty($webhookUrl)) {
                return;
            }

            Http::timeout(10)->post($webhookUrl, [
                'id' => $lead->id,
                'name' => $lead->name,
                'email' => $lead->email,
                'phone' => $lead->phone,
                'property_address' => $lead->property_address,
                'message' => $lead->message,
                'source' => $lead->source,
                'created_at' => $lead->created_at->toIso8601String(),
            ]);
        } catch (\Exception $e) {
            Log::error('Zapier webhook failed: ' . $e->getMessage());
        }
    }

    protected function sendEmailNotifications(Lead $lead): void
    {
        try {
            if (!Setting::get('enable_email_notifications', false)) {
                return;
            }

            $emails = Setting::getNotificationEmails();
            if (empty($emails)) {
                return;
            }

            // Use send() instead of queue() to send synchronously
            // This makes debugging easier and ensures delivery
            foreach ($emails as $email) {
                try {
                    Mail::to($email)->send(new NewLeadNotification($lead));
                } catch (\Exception $e) {
                    Log::error("Email to {$email} failed: " . $e->getMessage());
                }
            }
        } catch (\Exception $e) {
            Log::error('Email notification failed: ' . $e->getMessage());
        }
    }

    public function thankYou()
    {
        return Inertia::render('ThankYou');
    }

    protected function verifyRecaptcha(string $token, string $secret): bool
    {
        try {
            $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
                'secret' => $secret,
                'response' => $token,
            ]);

            $result = $response->json();
            return $result['success'] ?? false;
        } catch (\Exception $e) {
            Log::error('reCAPTCHA verification failed: ' . $e->getMessage());
            return false;
        }
    }
}
