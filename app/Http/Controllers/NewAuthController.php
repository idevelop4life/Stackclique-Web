<?php


namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class NewAuthController  extends Controller
{
    public function signup(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'level'=>'integer|max:10',
            'email' => 'required|string|email|unique:users|max:255',
            'password' => 'required|string|min:8',
            'username' => 'required|string|unique:users|max:255',
        ]);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->level = $request->level;
        $user->password = Hash::make($request->password);
        $user->username = $request->username;
        $user->save();

        return response()->json(['message' => 'User created successfully'], 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if (auth()->attempt($credentials)) {
            $user = auth()->user();
            $token = $user->createToken('authToken')->plainTextToken;
            return response()->json(['token' => $token], 200);
        }

        return response()->json(['message' => 'Unauthorized'], 401);
    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();
        return response()->json(['message' => 'Logged out successfully'], 200);
    }

    public function updateProfilePhoto(Request $request)
    {
        $request->validate([
            'profile_photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $user = auth()->user();
        $profilePhotoPath = $request->file('profile_photo')->store('profile_photos');

        // Delete previous profile photo if exists
        if ($user->profile_photo) {
            Storage::delete($user->profile_photo);
        }

        $user->profile_photo = $profilePhotoPath;
        $user->save();

        return response()->json(['message' => 'Profile photo updated successfully'], 200);
    }

    public function updateCoverPhoto(Request $request)
    {
        $request->validate([
            'cover_photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $user = auth()->user();
        $coverPhotoPath = $request->file('cover_photo')->store('cover_photos');

        // Delete previous cover photo if exists
        if ($user->cover_photo) {
            Storage::delete($user->cover_photo);
        }

        $user->cover_photo = $coverPhotoPath;
        $user->save();

        return response()->json(['message' => 'Cover photo updated successfully'], 200);
    }

    public function verifyEmail(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->email_verified_at = now();
        $user->save();

        return response()->json(['message' => 'Email verified successfully'], 200);
    }

    public function userDetails()
    {
        $user = auth()->user();
        return response()->json($user, 200);
    }
}
