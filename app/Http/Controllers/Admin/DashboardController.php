<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'total_leads' => Lead::count(),
            'new_leads' => Lead::where('status', 'new')->count(),
            'contacted_leads' => Lead::where('status', 'contacted')->count(),
            'qualified_leads' => Lead::where('status', 'qualified')->count(),
            'closed_leads' => Lead::where('status', 'closed')->count(),
            'lost_leads' => Lead::where('status', 'lost')->count(),
        ];

        $recentLeads = Lead::latest()->take(5)->get();

        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats,
            'recentLeads' => $recentLeads,
        ]);
    }
}
