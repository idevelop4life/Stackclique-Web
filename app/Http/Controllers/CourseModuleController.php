<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CourseModule;

class CourseModuleController extends Controller
{
    // Display a listing of the resource.
    public function index()
    {
        $modules = CourseModule::all();
        return view('modules.index', compact('modules'));
    }

    // Show the form for creating a new resource.
    public function create()
    {
        return view('modules.create');
    }

    // Store a newly created resource in storage.
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'course_id' => 'required',
            'name' => 'required|max:255',
            'title' => 'required|max:255',
            'content' => 'required',
            'video_url' => 'nullable|max:255',
            'cover_photo' => 'nullable|max:255',
            'profile_photo' => 'nullable|max:255',
        ]);

        $module = CourseModule::create($validatedData);

        return redirect()->route('modules.index')->with('success', 'Module created successfully');
    }

    // Display the specified resource.
    public function show(CourseModule $module)
    {
        return view('modules.show', compact('module'));
    }

    // Show the form for editing the specified resource.
    public function edit(CourseModule $module)
    {
        return view('modules.edit', compact('module'));
    }

    // Update the specified resource in storage.
    public function update(Request $request, CourseModule $module)
    {
        $validatedData = $request->validate([
            'course_id' => 'required',
            'name' => 'required|max:255',
            'title' => 'required|max:255',
            'content' => 'required',
            'video_url' => 'nullable|max:255',
            'cover_photo' => 'nullable|max:255',
            'profile_photo' => 'nullable|max:255',
        ]);

        $module->update($validatedData);

        return redirect()->route('modules.index')->with('success', 'Module updated successfully');
    }

    // Remove the specified resource from storage.
    public function destroy(CourseModule $module)
    {
        $module->delete();

        return redirect()->route('modules.index')->with('success', 'Module deleted successfully');
    }
}
