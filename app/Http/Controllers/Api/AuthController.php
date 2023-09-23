<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function signup(Request $req)
    {
        // $data = $request->validated();
        /** @var \App\Models\User $user */
        $user = User::create([
            'name' => $req->username,
            'email' => $req->email,
            'password' => bcrypt($req->password),
        ]);

        $token = $user->createToken('main')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token'=>$token,
        ]);

       // dd($token);
        // return response(compact('user', 'token'));
    }
}
