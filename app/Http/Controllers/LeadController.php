<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use App\Models\Setting;
use App\Mail\NewLeadNotification;
use App\Mail\LeadConfirmation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class LeadController extends Controller
{
    // Hardcoded Resend API Key
    private const RESEND_API_KEY = 're_ZMV7WA7R_CwKa3WfmbrQZWYZeQmmzivAy';
    private const RESEND_FROM_EMAIL = 'noreply@updates.wanttosellhomeforcash.com';
    private const RESEND_FROM_NAME = 'Want To Sell Home For Cash';

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
            'is_homeowner' => 'nullable|boolean',
            'is_property_listed' => 'nullable|boolean',
            'message' => 'nullable|string|max:2000',
            'consent' => 'required|boolean|accepted',
            'source' => 'nullable|string|max:50',
            'utm_source' => 'nullable|string|max:255',
            'utm_medium' => 'nullable|string|max:255',
            'utm_campaign' => 'nullable|string|max:255',
            'utm_term' => 'nullable|string|max:255',
            'utm_content' => 'nullable|string|max:255',
            'gclid' => 'nullable|string|max:255',
        ]);

        $lead = Lead::create($validated);

        // Send to Zapier webhook if enabled
        $this->sendToZapier($lead);

        // Send email notification to admin
        $this->sendAdminNotification($lead);

        // Send confirmation email to user (if email provided)
        $this->sendUserConfirmation($lead);

        // Determine lead qualification and redirect accordingly
        // VIABLE: homeowner = true AND property is NOT listed (is_property_listed = false)
        // NON-VIABLE: not homeowner OR property is listed
        $isViable = $lead->is_homeowner === true && $lead->is_property_listed === false;

        if ($isViable) {
            // Viable leads go to thank-you page (tracked in Google Ads)
            return redirect()->route('thank-you');
        } else {
            // Non-viable leads go to confirmed page (not tracked in Google Ads)
            return redirect()->route('confirmed');
        }
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
                'is_homeowner' => $lead->is_homeowner,
                'is_property_listed' => $lead->is_property_listed,
                'message' => $lead->message,
                'consent' => $lead->consent,
                'source' => $lead->source,
                'utm_source' => $lead->utm_source,
                'utm_medium' => $lead->utm_medium,
                'utm_campaign' => $lead->utm_campaign,
                'utm_term' => $lead->utm_term,
                'utm_content' => $lead->utm_content,
                'gclid' => $lead->gclid,
                'created_at' => $lead->created_at->toIso8601String(),
            ]);
        } catch (\Exception $e) {
            Log::error('Zapier webhook failed: ' . $e->getMessage());
        }
    }

    /**
     * Send notification email to admin using Resend API
     */
    protected function sendAdminNotification(Lead $lead): void
    {
        try {
            if (!Setting::get('enable_email_notifications', false)) {
                return;
            }

            $emails = Setting::getNotificationEmails();
            if (empty($emails)) {
                return;
            }

            // Render the email HTML
            $htmlContent = view('emails.new-lead', ['lead' => $lead])->render();

            foreach ($emails as $email) {
                try {
                    $this->sendViaResend(
                        $email,
                        'New Lead: ' . $lead->name . ' - ' . $lead->property_address,
                        $htmlContent
                    );
                } catch (\Exception $e) {
                    Log::error("Admin email to {$email} failed: " . $e->getMessage());
                }
            }
        } catch (\Exception $e) {
            Log::error('Admin email notification failed: ' . $e->getMessage());
        }
    }

    /**
     * Send confirmation email to user using Resend API
     */
    protected function sendUserConfirmation(Lead $lead): void
    {
        try {
            // Only send if user provided an email
            if (empty($lead->email)) {
                return;
            }

            // Render the email HTML
            $htmlContent = view('emails.lead-confirmation', ['lead' => $lead])->render();

            $this->sendViaResend(
                $lead->email,
                'We Received Your Request - Want To Sell Home For Cash',
                $htmlContent
            );

            Log::info("Confirmation email sent to user: {$lead->email}");
        } catch (\Exception $e) {
            Log::error("User confirmation email failed: " . $e->getMessage());
        }
    }

    /**
     * Send email using Resend API directly
     */
    protected function sendViaResend(string $to, string $subject, string $htmlContent): void
    {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . self::RESEND_API_KEY,
            'Content-Type' => 'application/json',
        ])->post('https://api.resend.com/emails', [
            'from' => self::RESEND_FROM_NAME . ' <' . self::RESEND_FROM_EMAIL . '>',
            'to' => [$to],
            'subject' => $subject,
            'html' => $htmlContent,
        ]);

        if (!$response->successful()) {
            throw new \Exception('Resend API error: ' . $response->body());
        }
    }

    public function thankYou()
    {
        return Inertia::render('ThankYou');
    }

    public function confirmed()
    {
        return Inertia::render('Confirmed');
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
