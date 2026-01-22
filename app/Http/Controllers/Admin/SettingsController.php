<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingsController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Settings', [
            'settings' => [
                'notification_emails' => Setting::get('notification_emails', ''),
                'zapier_webhook_url' => Setting::get('zapier_webhook_url', ''),
                'enable_email_notifications' => Setting::get('enable_email_notifications', true),
                'enable_zapier_webhook' => Setting::get('enable_zapier_webhook', true),
                // User confirmation email settings
                'enable_user_confirmation_email' => Setting::get('enable_user_confirmation_email', true),
                'user_email_subject' => Setting::get('user_email_subject', 'We Received Your Request - Want To Sell Home For Cash'),
                'user_email_intro' => Setting::get('user_email_intro', 'Thank you for reaching out to Want To Sell Home For Cash! We\'ve received your request for a cash offer and our team is already reviewing your property details.'),
                'user_email_phone' => Setting::get('user_email_phone', '(786) 949-9602'),
            ],
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'notification_emails' => 'nullable|string|max:1000',
            'zapier_webhook_url' => 'nullable|url|max:500',
            'enable_email_notifications' => 'boolean',
            'enable_zapier_webhook' => 'boolean',
            // User confirmation email settings
            'enable_user_confirmation_email' => 'boolean',
            'user_email_subject' => 'nullable|string|max:255',
            'user_email_intro' => 'nullable|string|max:2000',
            'user_email_phone' => 'nullable|string|max:50',
        ]);

        Setting::set('notification_emails', $validated['notification_emails'] ?? '', 'string');
        Setting::set('zapier_webhook_url', $validated['zapier_webhook_url'] ?? '', 'string');
        Setting::set('enable_email_notifications', $validated['enable_email_notifications'] ?? false, 'boolean');
        Setting::set('enable_zapier_webhook', $validated['enable_zapier_webhook'] ?? false, 'boolean');

        // User confirmation email settings
        Setting::set('enable_user_confirmation_email', $validated['enable_user_confirmation_email'] ?? true, 'boolean');
        Setting::set('user_email_subject', $validated['user_email_subject'] ?? 'We Received Your Request - Want To Sell Home For Cash', 'string');
        Setting::set('user_email_intro', $validated['user_email_intro'] ?? '', 'string');
        Setting::set('user_email_phone', $validated['user_email_phone'] ?? '(786) 949-9602', 'string');

        return redirect()->back()->with('success', 'Settings updated successfully.');
    }
}
