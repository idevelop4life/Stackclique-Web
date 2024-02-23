<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Channel extends Model
{
    use HasFactory;
    public $guarded = [];

    public function user(){
        $this->hasMany(User::class);
    }
}

