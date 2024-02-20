<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CourseController;
use App\Http\Middleware\VerifyCsrfToken;
use App\Http\Controllers\CourseCategoryController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Creating and fetching of courses routes

Route::middleware(['web'])->group(function () {
    // route for handling the course_category routes
    Route::get('/categories', [CourseCategoryController::class,'index']);
    Route::post('/categories', [CourseCategoryController::class,'store']);
    Route::put('/categories/{id}', [CourseCategoryController::class,'update']);
    Route::delete('/categories/{id}', [CourseCategoryController::class,'destroy']);

    
    // Your web routes here for courses operation
    Route::post('/courses', [CourseController::class, 'store']);
    // Route::post('/courses', [CourseController::class, 'create']);
    Route::get('/courses', [CourseController::class, 'getAllCourses']);
    Route::get('/courses/{id}', [CourseController::class, 'getCourseById']);

});


Route::get('/', function () {
    return view('welcome');
});

Auth::routes([
    'verify' => true
]);

// The email verification Notice
Route::get('/email/verify', function () {
    return view('auth.verify-email');
})->middleware('auth')->name('verification.notice');

// The email verification handler

use Illuminate\Foundation\Auth\EmailVerificationRequest;
 
Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();
 
    return redirect('/home');
})->middleware(['auth', 'signed'])->name('verification.verify');


// Resendint the verification email
use Illuminate\Http\Request;
 
Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();
 
    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');
