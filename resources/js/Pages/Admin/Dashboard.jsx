import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Users, UserPlus, Phone, CheckCircle, XCircle, Clock } from 'lucide-react';

export default function Dashboard({ stats, recentLeads }) {
    const statCards = [
        { name: 'Total Leads', value: stats.total_leads, icon: Users, color: 'bg-blue-500' },
        { name: 'New Leads', value: stats.new_leads, icon: UserPlus, color: 'bg-green-500' },
        { name: 'Contacted', value: stats.contacted_leads, icon: Phone, color: 'bg-yellow-500' },
        { name: 'Qualified', value: stats.qualified_leads, icon: Clock, color: 'bg-purple-500' },
        { name: 'Closed', value: stats.closed_leads, icon: CheckCircle, color: 'bg-emerald-500' },
        { name: 'Lost', value: stats.lost_leads, icon: XCircle, color: 'bg-red-500' },
    ];

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

    return (
        <AdminLayout title="Dashboard">
            <Head title="Admin Dashboard" />

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
                {statCards.map((stat) => (
                    <div key={stat.name} className="bg-white rounded-xl shadow-sm p-6">
                        <div className="flex items-center">
                            <div className={`${stat.color} p-3 rounded-lg`}>
                                <stat.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Leads */}
            <div className="bg-white rounded-xl shadow-sm">
                <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Recent Leads</h2>
                    <Link
                        href={route('admin.leads.index')}
                        className="text-sm font-medium text-primary hover:text-primary/80"
                    >
                        View All
                    </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {recentLeads.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                                        No leads yet. Leads will appear here when submitted.
                                    </td>
                                </tr>
                            ) : (
                                recentLeads.map((lead) => (
                                    <tr key={lead.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                                            <div className="text-sm text-gray-500">{lead.phone}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-900 max-w-xs truncate">{lead.property_address}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeClass(lead.status)}`}>
                                                {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {new Date(lead.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <Link
                                                href={route('admin.leads.show', lead.id)}
                                                className="text-primary hover:text-primary/80 font-medium"
                                            >
                                                View
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}
