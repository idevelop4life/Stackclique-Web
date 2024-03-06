<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\CourseEnrollment;
use App\Models\CourseCategory;


class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'title',
        'about',
        'profile_photo',
        'cover_photo',
        'instructor',
        'rating',
        'required_user_level',
    ];

    // Define the relationship with the Category model
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function enrollments()
    {
        return $this->hasMany(Enrollment::class);
    }
}




