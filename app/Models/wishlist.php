<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class wishlist extends Model
{
    use HasFactory;

    protected $guarded = [];

    /**
     * table for make RElationshep between user and product for wishlist
     */
    protected $table = 'product_user';

    public static function wishListHas($productid){
        return wishlist::where('product_id', $productid)->exists();
    }
}
