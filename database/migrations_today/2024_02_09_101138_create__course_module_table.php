<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCourseModulesTable extends Migration
{
    public function up()
    {
        Schema::create('course_modules', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('title');
            $table->string('content');
            $table->foreignId('course_id')->constrained()->onDelete('cascade');
            $table->string('video_url');
            $table->string('cover_photo');
            $table->string('profile_photo');
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
        Schema::dropIfExists('_course_module');
    }
};
