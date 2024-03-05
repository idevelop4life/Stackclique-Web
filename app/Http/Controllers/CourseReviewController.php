<?php

namespace App\Http\Controllers;

use App\Models\CourseReview;
use Illuminate\Http\Request;

class CourseReviewController extends Controller
{
    public function index()
    {
        $courseReviews = CourseReview::all();
        return view('course_reviews.index', compact('courseReviews'));
    }

    public function create()
    {
        return view('course_reviews.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'course_id' => 'required',
            'user_id' => 'required',
            'review_user_id' => 'required',
            'rating' => 'required',
            'text' => 'required',
        ]);

        CourseReview::create($request->all());

        return redirect()->route('course_reviews.index')
            ->with('success', 'Course review created successfully.');
    }

    public function show(CourseReview $courseReview)
    {
        return view('course_reviews.show', compact('courseReview'));
    }

    public function edit(CourseReview $courseReview)
    {
        return view('course_reviews.edit', compact('courseReview'));
    }

    public function update(Request $request, CourseReview $courseReview)
    {
        $request->validate([
            'course_id' => 'required',
            'user_id' => 'required',
            'review_user_id' => 'required',
            'rating' => 'required',
            'text' => 'required',
        ]);

        $courseReview->update($request->all());

        return redirect()->route('course_reviews.index')
            ->with('success', 'Course review updated successfully');
    }

    public function destroy(CourseReview $courseReview)
    {
        $courseReview->delete();

        return redirect()->route('course_reviews.index')
            ->with('success', 'Course review deleted successfully');
    }
}
