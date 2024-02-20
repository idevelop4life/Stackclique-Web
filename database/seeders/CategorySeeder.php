<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CourseCategory;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $categories = [
            ['name' => 'Computer Science', 'description' => 'Introduction to programming'],
            ['name' => 'Mathematics', 'description' => 'Basic and advanced mathematics'],
            // Add more fixed categories as needed
        ];

        foreach ($categories as $category) {
            CourseCategory::create($category);
        }
    }
}
