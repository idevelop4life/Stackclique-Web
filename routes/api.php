<?php

// use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\landController;
use App\Http\Controllers\NewAuthController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\CourseCategoryController;
use App\Http\Controllers\ChannelsController;
use App\Http\Controllers\ChatController;


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
// Routes for the chat channels

Route::prefix('api')->group(function () {
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
});



// Route::post('/signup', [AuthenController::class, 'signup'])->name('signup');
Route::get('/', [landController::class, 'land'])->name('land');
Route::post('/verf-user', [AuthController::class, 'verf_user']);


