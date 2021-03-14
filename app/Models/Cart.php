<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;


    protected $guarded = [];



    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
