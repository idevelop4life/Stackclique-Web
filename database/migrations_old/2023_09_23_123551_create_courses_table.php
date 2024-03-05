<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->uuid('id')->primary()->default(DB::raw('uuid()'));
            $table->string('title', 255);
            $table->text('about');
            $table->string('profile_photo', 255);
            $table->string('cover_photo', 255);
            $table->string('instructor', 255);
            $table->uuid('category_id');
            $table->integer('rating');
            $table->integer('required_user_level');
            $table->foreign('category_id')->references('id')->on('course_categories');
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
        Schema::dropIfExists('courses');
    }
};
