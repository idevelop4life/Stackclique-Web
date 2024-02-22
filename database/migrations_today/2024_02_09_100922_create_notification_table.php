<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
class CreateNotificationsTable extends Migration
{
    public function up()
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
<<<<<<< HEAD:database/migrations_today/2024_02_09_100922_create_notification_table.php
            $table->string('message');
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
=======
            $table->foreignId('user_id');
            $table->text('message');
>>>>>>> 71329d2b024dcef7d41cf681f5c63d817da349e0:database/migrations/2023_09_23_123613_create_notifications_table.php
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notifications');
    }
};
