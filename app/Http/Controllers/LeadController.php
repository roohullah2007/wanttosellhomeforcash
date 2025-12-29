<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LeadController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'nullable|email|max:255',
            'phone' => 'required|string|max:20',
            'property_address' => 'required|string|max:500',
            'message' => 'nullable|string|max:2000',
            'source' => 'nullable|string|max:50',
        ]);

        Lead::create($validated);

        return redirect()->route('thank-you');
    }

    public function thankYou()
    {
        return Inertia::render('ThankYou');
    }
}
