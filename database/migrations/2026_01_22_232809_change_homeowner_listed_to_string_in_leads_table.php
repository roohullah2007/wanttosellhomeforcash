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
        // First change column types to string (this allows storing text values)
        Schema::table('leads', function (Blueprint $table) {
            $table->string('is_homeowner', 10)->nullable()->change();
            $table->string('is_property_listed', 10)->nullable()->change();
        });

        // Then convert existing boolean data (1/0) to Yes/No strings
        DB::table('leads')->where('is_homeowner', '1')->update(['is_homeowner' => 'Yes']);
        DB::table('leads')->where('is_homeowner', '0')->update(['is_homeowner' => 'No']);
        DB::table('leads')->where('is_property_listed', '1')->update(['is_property_listed' => 'Yes']);
        DB::table('leads')->where('is_property_listed', '0')->update(['is_property_listed' => 'No']);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Convert Yes/No back to 1/0
        DB::table('leads')->where('is_homeowner', 'Yes')->update(['is_homeowner' => '1']);
        DB::table('leads')->where('is_homeowner', 'No')->update(['is_homeowner' => '0']);
        DB::table('leads')->where('is_property_listed', 'Yes')->update(['is_property_listed' => '1']);
        DB::table('leads')->where('is_property_listed', 'No')->update(['is_property_listed' => '0']);

        // Change column types back to boolean
        Schema::table('leads', function (Blueprint $table) {
            $table->boolean('is_homeowner')->nullable()->change();
            $table->boolean('is_property_listed')->nullable()->change();
        });
    }
};
