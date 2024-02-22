<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCourseCategoriesTable extends Migration
{
    public function up()
    {
        Schema::create('course_categories', function (Blueprint $table) {
            $table->id();
<<<<<<< HEAD:database/migrations_today/2024_02_09_100955_create__course_category_table.php
            $table->string('name');
            $table->string('description');
=======
            $table->string('name', 255);
            $table->text('description');
>>>>>>> 71329d2b024dcef7d41cf681f5c63d817da349e0:database/migrations/2023_09_23_123445_create_course_categories_table.php
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
        Schema::dropIfExists('_course_categories');
    }
};
