<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Chat extends Model
{
    use HasFactory;
    protected $fillable = ['sender_id', 'channel_id', 'message'];

    public function sender()
    {
        return $this->belongsTo(User::class, 'sender_id');
    }

    public function channel()
    {
        return $this->belongsTo(Channel::class, 'channel_id');
    }
}

