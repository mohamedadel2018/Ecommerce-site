<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
// use Darryldecode\Cart\Cart;
use App\Models\product;

class CartController extends Controller
{
    //

    public function index(){

        $cartItems = \Cart::session(auth::id())->getContent();
        return view('pages.cart');
    }



    public function store(product $product){

        // add the product to cart
        \Cart::session(Auth::id())->add(array(
            'id' => uniqid($product->id),
            'name' => $product->title,
            'price' => $product->presentPrice(),
            'quantity' => $product->amunt,
            'Availability' => $product->Availability ,
            'attributes' => array(),
            'associatedModel' => $product
        ));
        return back();
    }


    public function destroy($productId){
        \Cart::session(Auth::id())->remove($productId);

        return back();
    }

}
