<?php

namespace App\Http\Controllers;

use App\PersonalAccessToken;
use Illuminate\Http\Request;

class PersonalAccessTokenController extends Controller
{
    public function index()
    {
        $tokens = PersonalAccessToken::all();
        return response()->json(['tokens' => $tokens], 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'token' => 'required|string|unique:personal_access_tokens,token',
            'abilities' => 'nullable|string',
            'last_used_at' => 'nullable|date',
        ]);

        $token = PersonalAccessToken::create($request->all());

        return response()->json(['token' => $token], 201);
    }

    public function show($id)
    {
        $token = PersonalAccessToken::findOrFail($id);
        return response()->json(['token' => $token], 200);
    }

    public function update(Request $request, $id)
    {
        $token = PersonalAccessToken::findOrFail($id);

        $request->validate([
            'name' => 'required|string',
            'token' => 'required|string|unique:personal_access_tokens,token,' . $id,
            'abilities' => 'nullable|string',
            'last_used_at' => 'nullable|date',
        ]);

        $token->update($request->all());

        return response()->json(['token' => $token], 200);
    }

    public function destroy($id)
    {
        $token = PersonalAccessToken::findOrFail($id);
        $token->delete();

        return response()->json(null, 204);
    }
}
