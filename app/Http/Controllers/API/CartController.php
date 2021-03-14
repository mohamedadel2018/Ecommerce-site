<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
// use Darryldecode\Cart\Cart;
use App\Models\product;
use App\Models\Cart;
use App\Models\User;
class CartController extends Controller
{
    //
    public $userid;

    public function index(){

        $cartItems= User::find(Auth()->user()->id)->cart;
        return  response()->json($cartItems, 200);
    }



    public function store(Request $request){


       $cart_store = new Cart();
            $cart_store->title =$request->product['title'];
            $cart_store->dec = $request->product['dec'];
            $cart_store->price =$request->product['price'];
            $cart_store->amunt =$request->product['amunt'];
            $cart_store->Discount =$request->product['Discount'];
            $cart_store->image = $request->product['image'];
            $cart_store->user_id = $request->user['id'];
            $cart_store->product_id =$request->product['id'];
            $cart_store->Availability =$request->product['Availability'];
            $cart_store->save();
//


             return response()->json(['msg' => 'add done'], 200);

        // \Cart::session(Auth::id())->add(array(
        //     'id' => uniqid($product->id),
        //     'name' =>$request->product['title'];,
        //     'price' => $request->product['price'],
        //     'quantity' =>$request->product['amunt'],
        //     'Availability' => $request->product['Availability']; ,
        //     'attributes' => array(),
        //     'associatedModel' => $product
        // ));
        // return back();
    }


    public function destroy($id){

    //    $cart =  Cart::find($id);
    //    $cart->delete();
    \Cart::session(Auth::id())->remove($id);
        return response()->json(['']);
    }

}
