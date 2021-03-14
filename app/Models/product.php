<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    use HasFactory;

    protected $guarded = [];


    public function user()
    {
        return $this->belongsToMany('App\Models\User')->withTimestamps();
    }

    public function presentPrice(){

        return  number_format($this->price, 2);
    }


    public function category(){
        return $this->belongsTo('App\Models\categorie');
    }


    public function scopeMightAlsoLike($query){
        return $query->inRandomOrder()->take(8);
    }
}
