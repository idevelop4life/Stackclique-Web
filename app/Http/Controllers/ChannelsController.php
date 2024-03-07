<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Channel;
use App\Http\Controllers\Controller;


class ChannelsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $channels = Channel::all();
        return response()->json(['data'=>$channels]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $channel = Channel::create($request->all());

        return response()->json(['message' => 'Channels created successfully', 'channel' => $channel], 201);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $channel = Channel::findOrFail($id);
        return response()->json(['data'=>$channel], 200);
    }

   
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $channel = Chann::findOrFail($id);
        $channel->update($request->all());

        return response()->json(['message' => 'channel updated successfully', 'channel' => $request->all()],201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $channel = Channel::findOrFail($id);
        $channel->delete();

        return response()->json(['message' =>'channel deleted']);
    }
}
