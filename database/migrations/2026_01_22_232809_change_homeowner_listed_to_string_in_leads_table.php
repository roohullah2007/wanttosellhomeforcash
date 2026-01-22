<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // First convert existing boolean data to Yes/No strings
        DB::table('leads')->whereNotNull('is_homeowner')->update([
            'is_homeowner' => DB::raw("CASE WHEN is_homeowner = 1 THEN 'Yes' WHEN is_homeowner = 0 THEN 'No' ELSE NULL END")
        ]);

        DB::table('leads')->whereNotNull('is_property_listed')->update([
            'is_property_listed' => DB::raw("CASE WHEN is_property_listed = 1 THEN 'Yes' WHEN is_property_listed = 0 THEN 'No' ELSE NULL END")
        ]);

        // Change column types to string
        Schema::table('leads', function (Blueprint $table) {
            $table->string('is_homeowner', 10)->nullable()->change();
            $table->string('is_property_listed', 10)->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Convert Yes/No back to boolean
        DB::table('leads')->update([
            'is_homeowner' => DB::raw("CASE WHEN is_homeowner = 'Yes' THEN 1 WHEN is_homeowner = 'No' THEN 0 ELSE NULL END"),
            'is_property_listed' => DB::raw("CASE WHEN is_property_listed = 'Yes' THEN 1 WHEN is_property_listed = 'No' THEN 0 ELSE NULL END")
        ]);

        // Change column types back to boolean
        Schema::table('leads', function (Blueprint $table) {
            $table->boolean('is_homeowner')->nullable()->change();
            $table->boolean('is_property_listed')->nullable()->change();
        });
    }
};
