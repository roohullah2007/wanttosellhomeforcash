import { Head, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Settings as SettingsIcon, Mail, Webhook, Save, Send } from 'lucide-react';

export default function Settings({ settings }) {
    const { data, setData, post, processing, errors } = useForm({
        notification_emails: settings.notification_emails || '',
        zapier_webhook_url: settings.zapier_webhook_url || '',
        enable_email_notifications: settings.enable_email_notifications ?? true,
        enable_zapier_webhook: settings.enable_zapier_webhook ?? true,
        // User confirmation email settings
        enable_user_confirmation_email: settings.enable_user_confirmation_email ?? true,
        user_email_subject: settings.user_email_subject || 'We Received Your Request - Want To Sell Home For Cash',
        user_email_intro: settings.user_email_intro || 'Thank you for reaching out to Want To Sell Home For Cash! We\'ve received your request for a cash offer and our team is already reviewing your property details.',
        user_email_phone: settings.user_email_phone || '(786) 949-9602',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.settings.update'));
    };

    return (
        <AdminLayout title="Settings">
            <Head title="Admin Settings" />

            <div className="max-w-4xl">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <SettingsIcon className="w-7 h-7" />
                        Settings
                    </h1>
                    <p className="text-gray-600 mt-1">Manage notification settings and integrations</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Notifications Section */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-500 p-2 rounded-lg">
                                <Mail className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">Email Notifications</h2>
                                <p className="text-sm text-gray-500">Receive email alerts when new leads are submitted</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="enable_email_notifications"
                                    checked={data.enable_email_notifications}
                                    onChange={(e) => setData('enable_email_notifications', e.target.checked)}
                                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                />
                                <label htmlFor="enable_email_notifications" className="ml-2 text-sm text-gray-700">
                                    Enable email notifications for new leads
                                </label>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Notification Email Addresses
                                </label>
                                <textarea
                                    value={data.notification_emails}
                                    onChange={(e) => setData('notification_emails', e.target.value)}
                                    rows={3}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="email1@example.com, email2@example.com"
                                />
                                <p className="mt-1 text-xs text-gray-500">
                                    Separate multiple email addresses with commas
                                </p>
                                {errors.notification_emails && (
                                    <p className="text-red-500 text-sm mt-1">{errors.notification_emails}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* User Confirmation Email Section */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-green-500 p-2 rounded-lg">
                                <Send className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">User Confirmation Email</h2>
                                <p className="text-sm text-gray-500">Customize the email sent to users after form submission</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="enable_user_confirmation_email"
                                    checked={data.enable_user_confirmation_email}
                                    onChange={(e) => setData('enable_user_confirmation_email', e.target.checked)}
                                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                />
                                <label htmlFor="enable_user_confirmation_email" className="ml-2 text-sm text-gray-700">
                                    Send confirmation email to users after form submission
                                </label>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Subject
                                </label>
                                <input
                                    type="text"
                                    value={data.user_email_subject}
                                    onChange={(e) => setData('user_email_subject', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="We Received Your Request - Want To Sell Home For Cash"
                                />
                                {errors.user_email_subject && (
                                    <p className="text-red-500 text-sm mt-1">{errors.user_email_subject}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Introduction Message
                                </label>
                                <textarea
                                    value={data.user_email_intro}
                                    onChange={(e) => setData('user_email_intro', e.target.value)}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="Thank you for reaching out to Want To Sell Home For Cash! We've received your request..."
                                />
                                <p className="mt-1 text-xs text-gray-500">
                                    This message appears after the greeting in the email
                                </p>
                                {errors.user_email_intro && (
                                    <p className="text-red-500 text-sm mt-1">{errors.user_email_intro}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Contact Phone Number
                                </label>
                                <input
                                    type="text"
                                    value={data.user_email_phone}
                                    onChange={(e) => setData('user_email_phone', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="(786) 949-9602"
                                />
                                <p className="mt-1 text-xs text-gray-500">
                                    Phone number displayed in the email for users to contact
                                </p>
                                {errors.user_email_phone && (
                                    <p className="text-red-500 text-sm mt-1">{errors.user_email_phone}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Zapier Webhook Section */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-orange-500 p-2 rounded-lg">
                                <Webhook className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">Zapier Integration</h2>
                                <p className="text-sm text-gray-500">Send lead data to Zapier for automation workflows</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="enable_zapier_webhook"
                                    checked={data.enable_zapier_webhook}
                                    onChange={(e) => setData('enable_zapier_webhook', e.target.checked)}
                                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                />
                                <label htmlFor="enable_zapier_webhook" className="ml-2 text-sm text-gray-700">
                                    Enable Zapier webhook integration
                                </label>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Zapier Webhook URL
                                </label>
                                <input
                                    type="url"
                                    value={data.zapier_webhook_url}
                                    onChange={(e) => setData('zapier_webhook_url', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="https://hooks.zapier.com/hooks/catch/..."
                                />
                                {errors.zapier_webhook_url && (
                                    <p className="text-red-500 text-sm mt-1">{errors.zapier_webhook_url}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={processing}
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Save className="w-5 h-5" />
                            {processing ? 'Saving...' : 'Save Settings'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
