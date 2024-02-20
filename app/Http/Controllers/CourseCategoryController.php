<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CourseCategory;

class CourseCategoryController extends Controller
{
    // retrieve all the course categories
    public function index()
    {
        $categories = CourseCategory::all();
        return response()->json($categories);
    }

    // store the categories
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        $category = new CourseCategory();
        $category->name = $validatedData['name'];
        $category->description = $validatedData['description'];
        $category->save();

        return response()->json(['message' => 'Category created successfully', 'category' => $category], 201);
    }

    // Update the description
    public function update(Request $request, $id)
    {
        $category = Category::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        $category->name = $validatedData['name'];
        $category->description = $validatedData['description'];
        $category->save();

        return response()->json(['message' => 'Category updated successfully', 'category' => $category]);
    }

    // get coure_category for individual category
    public function show($id)
    {
        $category = Category::findOrFail($id);
        return response()->json($category);
    }

    // delete the course_category by id
    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();
        return response()->json(['message' => 'Category deleted successfully']);
    }

}
