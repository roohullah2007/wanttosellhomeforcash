import { Head, Link, useForm, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { ArrowLeft, Phone, Mail, MapPin, Calendar, MessageSquare, Save, Trash2 } from 'lucide-react';

export default function Show({ lead }) {
    const { data, setData, patch, processing, errors } = useForm({
        status: lead.status,
        notes: lead.notes || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        patch(route('admin.leads.update', lead.id));
    };

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this lead? This action cannot be undone.')) {
            router.delete(route('admin.leads.destroy', lead.id));
        }
    };

    const getStatusBadgeClass = (status) => {
        const classes = {
            new: 'bg-green-100 text-green-800',
            contacted: 'bg-yellow-100 text-yellow-800',
            qualified: 'bg-purple-100 text-purple-800',
            closed: 'bg-emerald-100 text-emerald-800',
            lost: 'bg-red-100 text-red-800',
        };
        return classes[status] || 'bg-gray-100 text-gray-800';
    };

    const statusOptions = [
        { value: 'new', label: 'New' },
        { value: 'contacted', label: 'Contacted' },
        { value: 'qualified', label: 'Qualified' },
        { value: 'closed', label: 'Closed' },
        { value: 'lost', label: 'Lost' },
    ];

    return (
        <AdminLayout title="Lead Details">
            <Head title={`Lead: ${lead.name} - Admin`} />

            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
                <Link
                    href={route('admin.leads.index')}
                    className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Leads
                </Link>
                <button
                    onClick={handleDelete}
                    className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
                >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Lead
                </button>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Lead Info */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Contact Card */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">{lead.name}</h2>
                                <span className={`inline-flex mt-2 px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeClass(lead.status)}`}>
                                    {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                                </span>
                            </div>
                            <div className="text-right text-sm text-gray-500">
                                <div className="flex items-center justify-end gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>{new Date(lead.created_at).toLocaleDateString()}</span>
                                </div>
                                <div className="text-xs mt-1">
                                    Source: {lead.source?.replace('_', ' ') || 'website'}
                                </div>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500">Phone</div>
                                    <a href={`tel:${lead.phone}`} className="text-sm font-medium text-gray-900 hover:text-primary">
                                        {lead.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500">Email</div>
                                    {lead.email ? (
                                        <a href={`mailto:${lead.email}`} className="text-sm font-medium text-gray-900 hover:text-primary">
                                            {lead.email}
                                        </a>
                                    ) : (
                                        <span className="text-sm text-gray-400">Not provided</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Property Card */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-primary" />
                            Property Information
                        </h3>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <div className="text-gray-900 font-medium">{lead.property_address}</div>
                        </div>
                    </div>

                    {/* Message Card */}
                    {lead.message && (
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <MessageSquare className="w-5 h-5 text-primary" />
                                Additional Message
                            </h3>
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <p className="text-gray-700 whitespace-pre-wrap">{lead.message}</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Update Form */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Update Lead</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                                <select
                                    value={data.status}
                                    onChange={(e) => setData('status', e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                                >
                                    {statusOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                                <textarea
                                    rows={6}
                                    value={data.notes}
                                    onChange={(e) => setData('notes', e.target.value)}
                                    placeholder="Add notes about this lead..."
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                />
                                {errors.notes && <p className="text-red-500 text-sm mt-1">{errors.notes}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Save className="w-4 h-4 mr-2" />
                                {processing ? 'Saving...' : 'Save Changes'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
