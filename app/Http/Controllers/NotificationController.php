<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Notification;


class NotificationController extends Controller
{
    public function index()
    {
        $notifications = Notification::all();
        return response()->json(['notifications' => $notifications]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'message' => 'required',
        ]);

        $notification = Notification::create($request->all());

        return response()->json(['notification' => $notification], 201);
    }

    public function show(Notification $notification)
    {
        return response()->json(['notification' => $notification]);
    }

    public function update(Request $request, Notification $notification)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'message' => 'required',
        ]);

        $notification->update($request->all());

        return response()->json(['notification' => $notification]);
    }

    public function destroy(Notification $notification)
    {
        $notification->delete();

        return response()->json(['message' => 'Notification deleted successfully']);
    }
}