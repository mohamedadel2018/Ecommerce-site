<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\product;
class detailsController extends Controller
{
    //
    public function ReturnDetailsProduct(product $product){
        dd($product);
        $mightAlsoLike =  product::where('id' ,'!=' ,$product)->MightAlsoLike()->get();
        return view('pages.detail',compact('product', 'mightAlsoLike'));

    }
}
