<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function signup(Request $req)
    {
        // Validate the incoming data using Laravel's validation rules
        $validatedData = $req->validate([
            'username' => 'required|string|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6',
        ]);

        try {
            // Attempt to create a new user
            $user = User::create([
                'name' => $validatedData['username'],
                'username' => $validatedData['username'],
                'email' => $validatedData['email'],
                'password' => bcrypt($validatedData['password']),
            ]);

            $token = $user->createToken('main')->plainTextToken;

            return response()->json([
                'user' => $user,
                'token' => $token,
                'message' => 'Data registered. You are now logged in.',
                'error' => null,
            ]);
        } catch (\Exception $e) {
            // Handle any exceptions that may occur during user creation
            return response()->json([
                'user' => null,
                'token' => null,
                'message' => 'Registration failed. Please try again.',
                'error' => $e->getMessage(),
            ]);
        }



    }
}
