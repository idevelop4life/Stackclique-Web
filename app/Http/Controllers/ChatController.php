<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ChatController extends Controller
{
    public function index()
    {
        // Retrieve all chat messages
        $chats = Chat::all();
        return response()->json($chats);
    }

    public function store(Request $request)
    {
        // Create a new chat message
        $chat = Chat::create($request->all());
        return response()->json($chat, 201);
    }

    public function show($id)
    {
        // Retrieve a single chat message
        $chat = Chat::findOrFail($id);
        return response()->json($chat);
    }

    public function update(Request $request, $id)
    {
        // Update a chat message
        $chat = Chat::findOrFail($id);
        $chat->update($request->all());
        return response()->json($chat, 200);
    }

    public function destroy($id)
    {
        // Delete a chat message
        $chat = Chat::findOrFail($id);
        $chat->delete();
        return response()->json(null, 204);
    }
}
