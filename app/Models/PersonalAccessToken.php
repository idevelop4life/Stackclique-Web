<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonalAccessToken extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'token', 'abilities', 'last_used_at'];

    protected $casts = [
        'last_used_at' => 'datetime',
    ];

    /**
     * Get the owning tokenable model.
     */
    public function tokenable()
    {
        return $this->morphTo();
    }
}
