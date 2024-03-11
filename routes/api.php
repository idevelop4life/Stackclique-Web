<?php

// use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\landController;
use App\Http\Controllers\NewAuthController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\CourseCategoryController;
use App\Http\Controllers\ChannelsController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\CourseModuleController;
use App\Http\Controllers\CourseEnrollmentController;
use App\Http\Controllers\CourseReviewController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\UserEmailVerificationTokenController;
use App\Http\Controllers\PersonalAccessTokenController;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


#############################################

// Route for the user authentication;

Route::post('/signup', [NewAuthController::class, 'signup']);
Route::post('/login', [NewAuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [NewAuthController::class, 'logout']);
    Route::post('/update-profile-photo', [NewAuthController::class, 'updateProfilePhoto']);
    Route::post('/update-cover-photo', [NewAuthController::class, 'updateCoverPhoto']);
    Route::post('/verify-email', [NewAuthController::class, 'verifyEmail']);
    Route::get('/user-details', [NewAuthController::class, 'userDetails']);
});


###############################################
// Routes for Courses


Route::post('/courses', [CourseController::class, 'create']);
Route::get('/courses', [CourseController::class, 'getAllCourses']);
Route::get('/courses/{id}', [CourseController::class, 'getCourse']);
Route::put('/courses/{id}', [CourseController::class, 'updateCourse']);
Route::delete('/courses/{id}', [CourseController::class, 'deleteCourse']);


###################################################
// Routes for CourseCategory

Route::get('course-categories', [CourseCategoryController::class, 'index']);
Route::post('course-categories', [CourseCategoryController::class, 'store']);
Route::get('course-categories/{id}', [CourseCategoryController::class, 'show']);
Route::put('course-categories/{id}', [CourseCategoryController::class, 'update']);
Route::delete('course-categories/{id}', [CourseCategoryController::class, 'destroy']);


####################################################
// Routes for the channels

Route::get('channels', [ChannelsController::class, 'index']);
Route::post('channels', [ChannelsController::class, 'store']);
Route::get('channels/{id}', [ChannelsController::class, 'show']);
Route::put('channels/{id}', [ChannelsController::class, 'update']);
Route::delete('channels/{id}', [ChannelsController::class, 'delete']);	

########################################################
// Routes for the course reviews

// Index
Route::get('/course_reviews', [CourseReviewController::class,'index']);

// Create
Route::post('/course_reviews', [CourseReviewController::class,'store']);

// Edit
Route::put('/course_reviews/{course_review}',  [CourseReviewController::class,'update']);

// Delete
Route::delete('/course_reviews/{course_review}',  [CourseReviewController::class,'destroy']);


##########################################################
//  Routes for Chat Management


// Route::prefix('api')->group(function () {
    // List all chat messages
    Route::get('chats', [ChatController::class, 'index']);

    // Create a new chat message
    Route::post('chats', [ChatController::class, 'store']);

    // Retrieve a single chat message
    Route::get('chats/{chat}', [ChatController::class, 'show']);

    // Update a chat message
    Route::put('chats/{chat}', [ChatController::class, 'update']);

    // Delete a chat message
    Route::delete('chats/{chat}', [ChatController::class, 'destroy']);
// });


##########################################################################
// Routes fo the CourseModules



// Display a listing of the resource.
Route::get('/modules', [CourseModuleController::class, 'index'])->name('modules.index');

// Show the form for creating a new resource.
Route::get('/modules/create', [CourseModuleController::class, 'create'])->name('modules.create');

// Store a newly created resource in storage.
Route::post('/modules', [CourseModuleController::class, 'store'])->name('modules.store');

// Display the specified resource.
Route::get('/modules/{module}', [CourseModuleController::class, 'show'])->name('modules.show');

// Update the specified resource in storage.
Route::put('/modules/{module}', [CourseModuleController::class, 'update'])->name('modules.update');

// Remove the specified resource from storage.
Route::delete('/modules/{module}', [CourseModuleController::class, 'destroy'])->name('modules.destroy');


####################################################################
// Routes for course enrollments

Route::get('/enrollments', [CourseEnrollmentController::class, 'index']);
Route::get('/enrollments/create', [CourseEnrollmentController::class, 'create']);
Route::post('/enrollments', [CourseEnrollmentController::class, 'store']);
Route::get('/enrollments/{enrollment}', [CourseEnrollmentController::class, 'show']);
Route::get('/enrollments/{enrollment}/edit', [CourseEnrollmentController::class, 'edit']);
Route::put('/enrollments/{enrollment}', [CourseEnrollmentController::class, 'update']);
Route::delete('/enrollments/{enrollment}', [CourseEnrollmentController::class, 'destroy']);

###################################################################
// Routes for the notifications


Route::get('/notifications', [NotificationController::class, 'index']);
Route::post('/notifications', [NotificationController::class, 'store']);
Route::get('/notifications/{notification}', [NotificationController::class, 'show']);
Route::put('/notifications/{notification}', [NotificationController::class, 'update']);
Route::delete('/notifications/{notification}', [NotificationController::class, 'destroy']);


###################################################################
// Routes for the User email verification

Route::get('/verify', [UserEmailVerificationTokenController::class, 'index']);
Route::post('/verify', [UserEmailVerificationTokenController::class, 'store']);
Route::put('/verify/{verify}', [UserEmailVerificationTokenController::class, 'update']);
Route::delete('/verify/{verify}', [UserEmailVerificationTokenController::class, 'destroy']);

########################################################################
// Routes for Personal Access Token

Route::get('/personal-access-tokens', [PersonalAccessTokenController::class, 'index']);
Route::post('/personal-access-tokens', [PersonalAccessTokenController::class, 'store']);
Route::get('/personal-access-tokens/{personal_access_token}', [PersonalAccessTokenController::class, 'show']);
Route::put('/personal-access-tokens/{personal_access_token}', [PersonalAccessTokenController::class, 'update']);
Route::delete('/personal-access-tokens/{personal_access_token}', [PersonalAccessTokenController::class, 'destroy']);



################################################################
// Route::post('/signup', [AuthenController::class, 'signup'])->name('signup');
Route::get('/', [landController::class, 'land'])->name('land');
Route::post('/verf-user', [AuthController::class, 'verf_user']);


