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
        ]);

        Setting::set('notification_emails', $validated['notification_emails'] ?? '', 'string');
        Setting::set('zapier_webhook_url', $validated['zapier_webhook_url'] ?? '', 'string');
        Setting::set('enable_email_notifications', $validated['enable_email_notifications'] ?? false, 'boolean');
        Setting::set('enable_zapier_webhook', $validated['enable_zapier_webhook'] ?? false, 'boolean');

        return redirect()->back()->with('success', 'Settings updated successfully.');
    }
}
