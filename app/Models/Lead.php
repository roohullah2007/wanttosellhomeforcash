<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Lead extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'property_address',
        'is_homeowner',
        'is_property_listed',
        'message',
        'consent',
        'source',
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_term',
        'utm_content',
        'gclid',
        'status',
        'notes',
    ];

    protected $casts = [
        'is_homeowner' => 'boolean',
        'is_property_listed' => 'boolean',
        'consent' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}
