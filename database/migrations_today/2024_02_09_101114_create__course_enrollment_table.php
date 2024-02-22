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
<<<<<<< HEAD:database/migrations_today/2024_02_09_101114_create__course_enrollment_table.php
            $table->foreignId('course_id')->constrained()->onDelete('cascade');
            $table->foreignId('enrolled_user_id')->constrained('users')->onDelete('cascade');
=======
            $table->foreignId('course_id');
            $table->foreignId('enrolled_user_id');
>>>>>>> 71329d2b024dcef7d41cf681f5c63d817da349e0:database/migrations/2023_09_23_123643_create_course_enrollements_table.php
            $table->boolean('completed')->default(false);
            $table->integer('completed_modules')->default(0);
            $table->timestamp('enrolled_at')->useCurrent();
            $table->timestamp('completed_at')->useCurrentOnUpdate()->nullable();
            $table->unique(['course_id', 'enrolled_user_id']);
<<<<<<< HEAD:database/migrations_today/2024_02_09_101114_create__course_enrollment_table.php
=======
            $table->timestamps();
>>>>>>> 71329d2b024dcef7d41cf681f5c63d817da349e0:database/migrations/2023_09_23_123643_create_course_enrollements_table.php
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
