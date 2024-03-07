<?php

namespace App\Http\Controllers;

use App\Models\CourseReview;
use Illuminate\Http\Request;

class CourseReviewController extends Controller
{
    public function index()
    {
        $courseReviews = CourseReview::all();
        return response()->json($courseReviews, 201);

    }

    // public function create()
    // {
    //     return view('course_reviews.create');
    // }

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

        return response()->json(['message' =>'review stored successfully']);
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
        return response()->json(['message'=>'Courses Updated Successfully']);    
    }
    
    public function destroy(CourseReview $courseReview)
    {
        $courseReview->delete();
        return response()->json(['Course review deleted successfully']);
    }
}
