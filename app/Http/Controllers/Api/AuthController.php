<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function signup()
    {
        // $data = $request->validated();
        /** @var \App\Models\User $user */
        $user = User::create([
            'name' => 'd',
            'email' => 'dd',
            'password' => bcrypt('ddd'),
        ]);

        $token = $user->createToken('main')->plainTextToken;
       dd($token);
        return response(compact('user', 'token'));
    }
}
