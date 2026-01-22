<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New Lead Notification</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #053E78;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .content {
            background-color: #f9fafb;
            padding: 24px;
            border: 1px solid #e5e7eb;
            border-top: none;
            border-radius: 0 0 8px 8px;
        }
        .lead-info {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            margin-top: 16px;
        }
        .field {
            margin-bottom: 16px;
            padding-bottom: 16px;
            border-bottom: 1px solid #e5e7eb;
        }
        .field:last-child {
            margin-bottom: 0;
            padding-bottom: 0;
            border-bottom: none;
        }
        .label {
            font-size: 12px;
            font-weight: 600;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
        }
        .value {
            font-size: 16px;
            color: #111827;
        }
        .cta-button {
            display: inline-block;
            background-color: #053E78;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            margin-top: 20px;
            font-weight: 600;
        }
        .footer {
            text-align: center;
            margin-top: 24px;
            color: #6b7280;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1 style="margin: 0; font-size: 24px;">New Lead Received!</h1>
    </div>

    <div class="content">
        <p style="margin-top: 0;">A new lead has been submitted through your website. Here are the details:</p>

        <div class="lead-info">
            <div class="field">
                <div class="label">Name</div>
                <div class="value">{{ $lead->name }}</div>
            </div>

            <div class="field">
                <div class="label">Phone</div>
                <div class="value">
                    <a href="tel:{{ $lead->phone }}" style="color: #053E78; text-decoration: none;">{{ $lead->phone }}</a>
                </div>
            </div>

            @if($lead->email)
            <div class="field">
                <div class="label">Email</div>
                <div class="value">
                    <a href="mailto:{{ $lead->email }}" style="color: #053E78; text-decoration: none;">{{ $lead->email }}</a>
                </div>
            </div>
            @endif

            <div class="field">
                <div class="label">Property Address</div>
                <div class="value">{{ $lead->property_address }}</div>
            </div>

            <div class="field">
                <div class="label">Homeowner?</div>
                <div class="value">{{ $lead->is_homeowner === true ? 'Yes' : ($lead->is_homeowner === false ? 'No' : 'Not specified') }}</div>
            </div>

            <div class="field">
                <div class="label">Property Listed?</div>
                <div class="value">{{ $lead->is_property_listed === true ? 'Yes' : ($lead->is_property_listed === false ? 'No' : 'Not specified') }}</div>
            </div>

            @if($lead->message)
            <div class="field">
                <div class="label">Additional Message</div>
                <div class="value">{{ $lead->message }}</div>
            </div>
            @endif

            <div class="field">
                <div class="label">Source</div>
                <div class="value">{{ ucfirst(str_replace('_', ' ', $lead->source ?? 'website')) }}</div>
            </div>

            <div class="field">
                <div class="label">Submitted At</div>
                <div class="value">{{ $lead->created_at->format('F j, Y \a\t g:i A') }}</div>
            </div>

            @if($lead->utm_source || $lead->utm_medium || $lead->utm_campaign || $lead->utm_term || $lead->utm_content)
            <div class="field">
                <div class="label">UTM Tracking Data</div>
                <div class="value" style="font-size: 14px;">
                    @if($lead->utm_source)<strong>Source:</strong> {{ $lead->utm_source }}<br>@endif
                    @if($lead->utm_medium)<strong>Medium:</strong> {{ $lead->utm_medium }}<br>@endif
                    @if($lead->utm_campaign)<strong>Campaign:</strong> {{ $lead->utm_campaign }}<br>@endif
                    @if($lead->utm_term)<strong>Term:</strong> {{ $lead->utm_term }}<br>@endif
                    @if($lead->utm_content)<strong>Content:</strong> {{ $lead->utm_content }}@endif
                </div>
            </div>
            @endif
        </div>

        <div style="text-align: center;">
            <a href="{{ url('/admin/leads/' . $lead->id) }}" class="cta-button">View Lead in Admin</a>
        </div>
    </div>

    <div class="footer">
        <p>This is an automated notification from {{ config('app.name') }}</p>
    </div>
</body>
</html>
