<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
class CreateCourseEnrollmentsTable extends Migration
{
    public function up()
    {
        Schema::create('course_enrollments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_id')->constrained()->onDelete('cascade');
            $table->foreignId('enrolled_user_id')->constrained('users')->onDelete('cascade');
            $table->boolean('completed')->default(false);
            $table->integer('completed_modules')->default(0);
            $table->timestamp('enrolled_at')->useCurrent();
            $table->timestamp('completed_at')->useCurrentOnUpdate()->nullable();
            $table->unique(['course_id', 'enrolled_user_id']);
        });
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('_course_enrollments');
    }
};
