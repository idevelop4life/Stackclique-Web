<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoursesTable extends Migration
{
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('about');
            $table->string('profile_photo');
            $table->string('cover_photo');
            $table->string('instructor');
            $table->foreignId('category_id')->constrained('course_categories')->onDelete('cascade');
            $table->integer('rating');
            $table->integer('required_user_level');
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
        Schema::dropIfExists('courses');
    }
};
