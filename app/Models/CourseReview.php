<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CourseReview extends Model
{
    protected $fillable = ['course_id', 'user_id', 'review_user_id', 'rating', 'text'];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function reviewUser()
    {
        return $this->belongsTo(User::class, 'review_user_id');
    }
}
