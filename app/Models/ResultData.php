<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResultData extends Model
{
    use HasFactory;

    protected $fillable = [
        'inhale_dura',
        'hold_dura',
        'card_text'
    ];
}
