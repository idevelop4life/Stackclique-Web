<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
class CreateCourseReviewsTable extends Migration
{
    public function up()
    {
        Schema::create('course_reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_id')->constrained()->onDelete('cascade');
            $table->foreignId('review_user_id')->constrained('users')->onDelete('cascade');
            $table->integer('rating');
            $table->string('text');
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
        Schema::dropIfExists('_course_reviews');
    }
};
