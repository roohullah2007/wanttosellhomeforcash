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
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->text('value')->nullable();
            $table->string('type')->default('string'); // string, json, boolean
            $table->timestamps();
        });

        // Insert default settings
        DB::table('settings')->insert([
            ['key' => 'notification_emails', 'value' => 'kareemyouseff@gmail.com,kareem@wanttosellhomeforcash.com', 'type' => 'string', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'zapier_webhook_url', 'value' => 'https://hooks.zapier.com/hooks/catch/18132227/30qfi59/', 'type' => 'string', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'enable_email_notifications', 'value' => '1', 'type' => 'boolean', 'created_at' => now(), 'updated_at' => now()],
            ['key' => 'enable_zapier_webhook', 'value' => '1', 'type' => 'boolean', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
