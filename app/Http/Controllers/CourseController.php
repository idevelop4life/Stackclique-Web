<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use App\Models\CourseCategory;
// use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class CourseController extends Controller
{
    //
    public function store(Request $request)
    {
        // Validate the incoming request data for both course and category
        $validatedData = $request->validate([
            'category_name' => 'required|string|max:255',
            'category_description' => 'string|max:255',
            'title' => 'required|string|max:255',
            'about' => 'required|string',
            'profile_photo' => 'required|string|max:255',
            'cover_photo' => 'required|string|max:255',
            'instructor' => 'required|string|max:255',
            'rating' => 'required|integer',
            'required_user_level' => 'required|integer',
        ]);

        // Start a database transaction
        DB::beginTransaction();

        try {
            // Create a new category instance
            $category = new CourseCategory();
            $category->name = $validatedData['category_name'];
            $category->description = $validatedData['category_description'];
            $category->save();

            // // Create a new course instance
            $course = new Course();
            $course->title = $validatedData['title'];
            $course->about = $validatedData['about'];
            $course->profile_photo = $validatedData['profile_photo'];
            $course->cover_photo = $validatedData['cover_photo'];
            $course->instructor = $validatedData['instructor'];
            $course->category_id = $category->id;
            $course->rating = $validatedData['rating'];
            $course->required_user_level = $validatedData['required_user_level'];
            $course->save();

            // Commit the transaction
            DB::commit();

            // Return a response
            return response()->json(['message' => 'Course created successfully', 'course' => $course], 201);
        } catch (\Exception $e) {
            // Rollback the transaction in case of failure
            DB::rollback();
            return response()->json(['message' => 'Failed to create course'], 500);
        }
    }

    // Fetch all courses
    public function getAllCourses()
    {
        $courses = Course::with('category')->get(); // Assuming you have defined the 'category' relationship in your Course model

        return response()->json(['courses' => $courses], 200);
    }

    // Fetch an individual course by ID
    public function getCourseById($id)
    {
        $course = Course::with('category')->find($id);

        if (!$course) {
            return response()->json(['message' => 'Course not found'], 404);
        }

        return response()->json(['course' => $course], 200);
    }
}
