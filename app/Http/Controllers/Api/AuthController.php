<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\VerfEmail;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class AuthController extends Controller
{

    // A static function to make a verf code and pin
    public static function generateRefcode($name)
    {
        $verf_code = Str::slug($name);
        if (Str::length($verf_code) > 5) {
            $verf_code = Str::limit($verf_code, 6, '');
        } else {
            $verf_code = Str::limit($verf_code, 3, '');
        }
        $verf_code = $verf_code . rand(1000, 9999);
        return $verf_code;
    }

    public function signup(Request $req)
    {
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
                'verf_pin'=>$verf_code,
                'name'=>$validatedData['username'],
            ];

            // Send the verification mail
            Mail::to($validatedData['email'])->send(new VerfEmail($verf_dets));

            // Return the response to the front-end.
            return response()->json([
                'user' => $user,
                'token' => $token,
                'message' => 'Data registered. Awaiting Verification.',
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


    public function login(Request $req)
    {

         // Validate the incoming data
         $validatedData = $req->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        try {
            Auth::attempt($validatedData);

            /**  @var User $user */
            $user = Auth::user();
            $token = $user->createToken('main')->plainTextToken;
            return response()->json([
                'user' => $user,
                'token' => $token,
                'message' => 'Data Checked. You are now logged in.',
                'error' => null,
            ]);

        } catch (\Exception $e) {
            return response()->json([

                'error' => "Provided email address or password is incorrect".$e->getMessage(),
            ]);
        }

    }

    public function logout(Request $req)
    {

        /** @var User $user */

        $user = $req->user();
        $user->currentAccessToken()->delete();
        return response('', 204);
    }

    public function verf_user(Request $req)
    {

        $user = User::where('verf_pin',$req->otp)->first();


        if ($user != null) {


            $u = User::where('verf_pin',$req->otp)->where('email_verified_at', null)->first();

           if ($u != null) {

                $u->email_verified_at = now()->format('Y-m-d');
                $u->save();
                return response()->json(['user'=> $u]);


           } else {

               return response()->json(['error'=> 'You are already Verified']);
           }


        } else {

            return response()->json(['erro'=> 'Incorrect pin']);

        }


        // dd($user);

        // if (User::where('verf_pin',$req->otp)) {


        //     $user->email_verified_at = now()->format('Y-m-d');
        //     $user->save();

        //   return response()->json(['user'=> $user]);

        // } else {

        // }

    }
}
