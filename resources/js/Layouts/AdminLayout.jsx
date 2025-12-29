import { Link, usePage } from '@inertiajs/react';
import {
    LayoutDashboard,
    Users,
    Settings,
    LogOut,
    Menu,
    X,
    Home,
    ChevronDown
} from 'lucide-react';
import { useState } from 'react';

export default function AdminLayout({ children, title }) {
    const { auth } = usePage().props;
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const navigation = [
        { name: 'Dashboard', href: route('admin.dashboard'), icon: LayoutDashboard, current: route().current('admin.dashboard') },
        { name: 'Leads', href: route('admin.leads.index'), icon: Users, current: route().current('admin.leads.*') },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Mobile sidebar backdrop */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-primary transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
                    <Link href={route('admin.dashboard')} className="flex items-center">
                        <span className="text-white text-xl font-bold">Admin Panel</span>
                    </Link>
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <nav className="mt-6 px-3">
                    <div className="space-y-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                                    item.current
                                        ? 'bg-white/20 text-white'
                                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                                }`}
                            >
                                <item.icon className="w-5 h-5 mr-3" />
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10">
                        <Link
                            href="/"
                            className="flex items-center px-4 py-3 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                        >
                            <Home className="w-5 h-5 mr-3" />
                            Back to Website
                        </Link>
                    </div>
                </nav>
            </div>

            {/* Main content */}
            <div className="lg:pl-64">
                {/* Top bar */}
                <div className="sticky top-0 z-10 bg-white shadow-sm">
                    <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                        <button
                            className="lg:hidden text-gray-500 hover:text-gray-700"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>

                        <div className="flex-1 lg:flex-none">
                            <h1 className="text-lg font-semibold text-gray-900 lg:hidden">
                                {title || 'Admin'}
                            </h1>
                        </div>

                        {/* User menu */}
                        <div className="relative">
                            <button
                                onClick={() => setUserMenuOpen(!userMenuOpen)}
                                className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                            >
                                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                                    {auth.user?.name?.charAt(0).toUpperCase()}
                                </div>
                                <span className="hidden sm:block">{auth.user?.name}</span>
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {userMenuOpen && (
                                <>
                                    <div
                                        className="fixed inset-0 z-10"
                                        onClick={() => setUserMenuOpen(false)}
                                    />
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-20">
                                        <Link
                                            href={route('profile.edit')}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Profile
                                        </Link>
                                        <Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            Logout
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Page content */}
                <main className="p-4 sm:p-6 lg:p-8">
                    {title && (
                        <div className="mb-6 hidden lg:block">
                            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                        </div>
                    )}
                    {children}
                </main>
            </div>
        </div>
    );
}
