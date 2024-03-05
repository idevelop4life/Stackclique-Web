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
            $table->foreignId('course_id');
            $table->foreignId('enrolled_user_id');
            $table->boolean('completed')->default(false);
            $table->integer('completed_modules')->default(0);
            $table->unique(['course_id', 'enrolled_user_id']);
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
