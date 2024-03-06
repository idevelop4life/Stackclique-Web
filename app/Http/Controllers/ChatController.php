<?php
namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function index()
    {
        $chats = Chat::all();
        return response()->json($chats);
    }

    public function show(Chat $chat)
    {
        return response()->json($chat);
    }

    public function store(Request $request)
    {
        $request->validate([
            'sender_id' => 'required',
            'channel_id' => 'required',
            'message' => 'required',
        ]);

        $chat = Chat::create($request->all());
        return response()->json($chat, 201);
    }

    public function update(Request $request, Chat $chat)
    {
        $request->validate([
            'sender_id' => 'required',
            'channel_id' => 'required',
            'message' => 'required',
        ]);

        $chat->update($request->all());
        return response()->json($chat, 200);
    }

    public function destroy(Chat $chat)
    {
        $chat->delete();
        return response()->json(null, 204);
    }
}