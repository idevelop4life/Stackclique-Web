<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
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
        Schema::create('course_enrollements', function (Blueprint $table) {
            $table->id();
            $table->uuid('course_id');
            $table->uuid('enrolled_user_id');
            $table->boolean('completed')->default(false);
            $table->integer('completed_modules')->default(0);
            $table->unique(['course_id', 'enrolled_user_id']);
            $table->foreign('course_id')->references('id')->on('courses');
            $table->foreign('enrolled_user_id')->references('id')->on('users');
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
        Schema::dropIfExists('course_enrollements');
    }
};
