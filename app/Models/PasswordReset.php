<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PasswordReset extends Model
{
    use HasFactory;

    protected $fillable = ['email', 'token'];

    /**
     * Get the user associated with the password reset.
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'email', 'email');
    }
}
