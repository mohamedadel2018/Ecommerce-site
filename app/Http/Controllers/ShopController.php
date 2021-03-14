<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\product;

class ShopController extends Controller
{
    //

    public function index(){

        $products = product::latest()->paginate(5);
        return view('pages.shop');
    }
}
