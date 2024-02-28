<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Channel extends Model
{
    use HasFactory;
    // public $guarded = [];

    protected $fillable = [
        'name',
        'user_id'
    ];
    
    public function user(){
        $this->hasMany(User::class);
    }
}

