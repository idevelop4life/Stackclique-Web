<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Controller;
use App\Mail\VerfEmail;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $req)
    {
        // $request->validate([
        //     // 'name' => ['required', 'string', 'max:255'],
        //     'email' => ['required', 'string', 'email', 'max:255', 'unique:'.User::class],
        //     // 'password' => ['required', 'confirmed', Rules\Password::defaults()],
        // ]);

        // $user = User::create([
        //     'name' => $request->username,
        //     'username' => $request->username,
        //     'email' => $request->email,
        //     'password' => Hash::make($request->password),
        // ]);

        // event(new Registered($user));

        // Auth::login($user);

        // return response()->noContent();
         // Validate the incoming data
        $validatedData = $req->validate([
            'username' => 'required|string|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6',
        ]);

        try {
            // Attempt to create a new user
            // The verification code
            $verf_code = AuthController::generateRefcode($req->name);
            $user = User::create([
                'name' => $validatedData['username'],
                'username' => $validatedData['username'],
                'email' => $validatedData['email'],
                'password' => bcrypt($validatedData['password']),
                'verf_pin' => $verf_code,
            ]);

            event(new Registered($user));

            Auth::login($user);

            // Make the token to login the user
            $token = $user->createToken('main')->plainTextToken;

            // Make the verification mail
            $verf_dets = [
                'verf_pin' => $verf_code,
                'name' => $validatedData['username'],
            ];

            // Send the verification mail
            Mail::to($validatedData['email'])->send(new VerfEmail($verf_dets));


            // Return the response to the front-end.
            return response()->json([
                'user' => $user,
                'token' => $token,
                'message' => 'Data registered. Awaiting Verification.',
                'error' => null,
                'verf_pin' => $verf_dets['verf_pin'],
                'verf_pin_name' => $verf_dets['name'],
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
