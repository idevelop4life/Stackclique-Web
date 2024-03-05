<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class CourseController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'category_id' => 'required|exists:course_categories,id',
            'title' => 'required|string|max:255',
            'about' => 'required|string',
            'profile_photo' => 'required|string|max:255',
            'cover_photo' => 'required|string|max:255',
            'instructor' => 'required|string|max:255',
            'rating' => 'required|integer',
            'required_user_level' => 'required|integer',
        ]);

        $course = Course::create($request->all());

        return response()->json(['message' => 'Course created successfully', 'course' => $course], 201);
    }

    public function getAllCourses()
    {
        $courses = Course::all();
        return response()->json($courses, 200);
    }

    public function getCourse($id)
    {
        $course = Course::findOrFail($id);
        return response()->json($course, 200);
    }

    public function updateCourse(Request $request, $id)
    {
        $request->validate([
            'category_id' => 'exists:course_categories,id',
            'title' => 'string|max:255',
            'about' => 'string',
            'profile_photo' => 'string|max:255',
            'cover_photo' => 'string|max:255',
            'instructor' => 'string|max:255',
            'rating' => 'integer',
            'required_user_level' => 'integer',
        ]);

        $course = Course::findOrFail($id);
        $course->update($request->all());

        return response()->json(['message' => 'Course updated successfully', 'course' => $course], 200);
    }

    public function deleteCourse($id)
    {
        $course = Course::findOrFail($id);
        $course->delete();

        return response()->json(['message' => 'Course deleted successfully'], 200);
    }
}
