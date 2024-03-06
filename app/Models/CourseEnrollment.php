<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Course;
// use App\Models\Enrollment;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CourseEnrollment extends Model
{
    protected $guarded = [];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'enrolled_user_id');
    }

    public function markAsCompleted()
    {
        $this->completed = true;
        $this->save();
    }
}








