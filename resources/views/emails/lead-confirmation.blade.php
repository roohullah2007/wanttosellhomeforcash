<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>We Received Your Request</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .email-container {
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #053E78;
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 26px;
            font-weight: 700;
        }
        .header p {
            margin: 10px 0 0;
            opacity: 0.9;
            font-size: 16px;
        }
        .content {
            padding: 30px;
        }
        .greeting {
            font-size: 18px;
            margin-bottom: 20px;
        }
        .message {
            color: #555;
            margin-bottom: 25px;
        }
        .property-box {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 25px;
        }
        .property-box .label {
            font-size: 12px;
            font-weight: 600;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        .property-box .value {
            font-size: 16px;
            color: #111827;
            font-weight: 500;
        }
        .steps {
            margin-bottom: 25px;
        }
        .steps h3 {
            color: #053E78;
            margin-bottom: 15px;
            font-size: 18px;
        }
        .step {
            display: flex;
            margin-bottom: 15px;
        }
        .step-number {
            background-color: #053E78;
            color: white;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 14px;
            margin-right: 12px;
            flex-shrink: 0;
        }
        .step-content h4 {
            margin: 0 0 4px;
            font-size: 15px;
            color: #111827;
        }
        .step-content p {
            margin: 0;
            font-size: 14px;
            color: #6b7280;
        }
        .contact-box {
            background-color: #053E78;
            color: white;
            border-radius: 8px;
            padding: 20px;
            text-align: center;
            margin-bottom: 20px;
        }
        .contact-box p {
            margin: 0 0 10px;
            font-size: 14px;
            opacity: 0.9;
        }
        .contact-box .phone {
            font-size: 24px;
            font-weight: bold;
            color: white;
            text-decoration: none;
        }
        .footer {
            text-align: center;
            padding: 20px;
            color: #6b7280;
            font-size: 13px;
            border-top: 1px solid #e5e7eb;
        }
        .footer a {
            color: #053E78;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Thank You, {{ $lead->name }}!</h1>
            <p>We've received your cash offer request</p>
        </div>

        <div class="content">
            <p class="greeting">Hi {{ explode(' ', $lead->name)[0] }},</p>

            <p class="message">
                Thank you for reaching out to Want To Sell Home For Cash! We've received your request for a cash offer and our team is already reviewing your property details.
            </p>

            <div class="property-box">
                <div class="label">Property Address</div>
                <div class="value">{{ $lead->property_address }}</div>
            </div>

            <div class="steps">
                <h3>What Happens Next?</h3>

                <div class="step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <h4>We Review Your Property</h4>
                        <p>Our team analyzes your property details and local market conditions.</p>
                    </div>
                </div>

                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <h4>We Call You Within 24 Hours</h4>
                        <p>Expect a call from one of our friendly team members to discuss your situation.</p>
                    </div>
                </div>

                <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <h4>Receive Your Fair Cash Offer</h4>
                        <p>We'll present you with a no-obligation cash offer for your property.</p>
                    </div>
                </div>
            </div>

            <div class="contact-box">
                <p>Have questions? Give us a call!</p>
                <a href="tel:+17869499602" class="phone">(786) 949-9602</a>
            </div>

            <p style="color: #6b7280; font-size: 14px; text-align: center;">
                We look forward to helping you sell your home quickly and hassle-free!
            </p>
        </div>

        <div class="footer">
            <p>
                &copy; {{ date('Y') }} Want To Sell Home For Cash<br>
                <a href="https://wanttosellhomeforcash.com">wanttosellhomeforcash.com</a>
            </p>
            <p style="margin-top: 10px; font-size: 11px; color: #9ca3af;">
                You received this email because you submitted a request on our website.
            </p>
        </div>
    </div>
</body>
</html>
