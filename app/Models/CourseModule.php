<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseModule extends Model
{
    use HasFactory;
    protected $fillable = [
        'course_id',
        'name',
        'title',
        'content',
        'video_url',
        'cover_photo',
        'profile_photo',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
