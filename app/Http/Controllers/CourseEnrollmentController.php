<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\CourseEnrollment;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CourseEnrollmentController extends Controller
{
    public function index()
    {
        $enrollments = CourseEnrollment::all();
        // return $request->all();
        return response()->json($enrollment, 200);

        // return view('enrollments.index', compact('enrollments'));
    }

    public function create()
    {
        $courses = Course::all();
        return view('enrollments.create', compact('courses'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'course_id' => 'required',
            'enrolled_user_id' => 'required',
        ]);

        CourseEnrollment::create($request->all());

        return response()->json(['message' => 'Course Enrolled successfully'], 201);
  
        // return redirect()->route('enrollments.index')
        //     ->with('success', 'Enrollement created successfully.');
    }

    public function show(Enrollment $enrollment)
    {
        return view('enrollments.show', compact('enrollement'));
    }

    public function edit(Enrollement $enrollment)
    {
        $courses = Course::all();
        return response()->json($courses, 200);

        // return view('enrollments.edit', compact('enrollement', 'courses'));
    }

    public function update(Request $request, Enrollment $enrollment)
    {
        $request->validate([
            'course_id' => 'required',
            'enrolled_user_id' => 'required',
        ]);

        $enrollment->update($request->all());
        return response()->json($enrollment, 200);

        // return redirect()->route('enrollments.index')
        //     ->with('success', 'Enrollement updated successfully');
    }

    public function destroy(Enrollement $enrollment)
    {
        $enrollment->delete();

        
        return response()->json(['message' => 'Enrollment deleted successfully'], 201);
        // return redirect()->route('enrollments.index')
        //     ->with('success', 'Enrollement deleted successfully');
    }
    
}
