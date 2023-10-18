<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request)
    {

        try {
            $request->authenticate();

            $request->session()->regenerate();
            /**  @var User $user */
            $user = Auth::user();
            $token = $user->createToken('main')->plainTextToken;
           

            return response()->json([
                'message'=>'User Logged in',
                'token'=>$token,
                'error'=>'none',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message'=>'User Not Logged in',
                'token' =>null,
                'error'=>'Error'. $e->getMessage(),
            ]);
        }

    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json([
            'message'=>'User Logged Out',
            'error'=>'none',
        ]);
    }
}
