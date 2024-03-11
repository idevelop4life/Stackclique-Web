<?php

namespace App\Http\Controllers;

use App\Models\PasswordReset;
use Illuminate\Http\Request;

class PasswordResetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PasswordReset::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email',
            'token' => 'required|string',
        ]);

        return PasswordReset::create($validatedData);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PasswordReset  $passwordReset
     * @return \Illuminate\Http\Response
     */
    public function show(PasswordReset $passwordReset)
    {
        return $passwordReset;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PasswordReset  $passwordReset
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PasswordReset $passwordReset)
    {
        $validatedData = $request->validate([
            'email' => 'required|email',
            'token' => 'required|string',
        ]);

        $passwordReset->update($validatedData);
        return $passwordReset;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PasswordReset  $passwordReset
     * @return \Illuminate\Http\Response
     */
    public function destroy(PasswordReset $passwordReset)
    {
        $passwordReset->delete();
        return response()->json(null, 204);
    }
}
