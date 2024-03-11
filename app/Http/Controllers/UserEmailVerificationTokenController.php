<?php


namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\UserEmailVerificationToken;

class UserEmailVerificationTokenController extends Controller
{
    public function index()
    {
        // Retrieve all user email verification tokens
        $tokens = UserEmailVerificationToken::all();
        return response()->json($tokens, 200);
    }

    public function store(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'email' => 'required|email|unique:user_email_verification_tokens',
            'otp' => 'required|numeric',
            'verified'=>'boolean',
            // Add more validation rules if necessary
        ]);

        // Create a new user email verification token
        $token = UserEmailVerificationToken::create($validatedData);
        return response()->json($token, 200);
    }

    public function update(Request $request, UserEmailVerificationToken $userEmailVerificationToken)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'email' => 'required|email|unique:user_email_verification_tokens,email,' . $userEmailVerificationToken->id,
            'otp' => 'required|numeric',
            // Add more validation rules if necessary
        ]);

        // Update the specified token
        $userEmailVerificationToken->update($validatedData);
      
        return response()->json(['message' => 'Verification token updated created successfully']);
    }

    public function destroy(UserEmailVerificationToken $userEmailVerificationToken)
    {
        // Delete the specified token
        $userEmailVerificationToken->delete();
        return response()->json(['message' => 'Verification token deleted created successfully']);
    }
}
