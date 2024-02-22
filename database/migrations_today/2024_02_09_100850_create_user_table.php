<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
class CreateUsersTable extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
<<<<<<< HEAD:database/migrations_today/2024_02_09_100850_create_user_table.php
            $table->id();
=======
            // $table->uuid('id')->primary()->default(DB::raw('uuid()'));
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
>>>>>>> 71329d2b024dcef7d41cf681f5c63d817da349e0:database/migrations/2014_10_12_000000_create_users_table.php
            $table->string('username')->unique();
            $table->string('email')->unique()->nullable();
            $table->string('password');
            $table->string('profile_photo')->nullable();
            $table->string('cover_photo')->nullable();
<<<<<<< HEAD:database/migrations_today/2024_02_09_100850_create_user_table.php
            $table->string('role')->default('User');
            $table->integer('level')->default(0);
=======
            // $table->integer('level')->default(0);
            $table->enum('level',['beginner','intermidiate','advanced'])->default('beginner');
            $table->foreignId('channel_id')->nullable();
            $table->rememberToken();
>>>>>>> 71329d2b024dcef7d41cf681f5c63d817da349e0:database/migrations/2014_10_12_000000_create_users_table.php
            $table->timestamps();
            $table->timestamp('updated_at')->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
