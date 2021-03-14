<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Darryldecode\Cart\Cart;
use App\Models\product;
// use App\Models\Cart;
use App\Models\User;
class ApiCartController extends Controller
{
    //
    public $userid;



    public function store(Request $request){


    //    $cart_store = new Cart();
    //         $cart_store->title =$request->product['title'];
    //         $cart_store->dec = $request->product['dec'];
    //         $cart_store->price =$request->product['price'];
    //         $cart_store->amunt =$request->product['amunt'];
    //         $cart_store->Discount =$request->product['Discount'];
    //         $cart_store->image = $request->product['image'];
    //         $cart_store->user_id = $request->user['id'];
    //         $cart_store->product_id =$request->product['id'];
    //         $cart_store->Availability =$request->product['Availability'];
    //         $cart_store->save();
//
        if(auth::user()){
            \Cart::session(Auth::id())->add(array(
                'id' => uniqid($request->product['id']),
                'name' =>$request->product['title'],
                'price' => $request->product['price'],
                'quantity' =>$request->product['amunt'],
                'attributes' => array(
                    'image' =>  $request->product['image'],
                    'Availability' => $request->product['Availability'],
                ),
            ));

             return response()->json(['msg' => 'add done'], 200);
            }
             else{
                return response()->json(['msg' => 'login before'], 200);
             }
        // add the product to cart

        // return back();
    }


    public function index(){

        // $cartItems= User::find(Auth::id())->cart;
        $cartItems = \Cart::session(Auth::id())->getContent();
        $total = \Cart::session(Auth::id())->getTotal();
        return  response()->json([
            'cartItems' =>\Cart::session(Auth::id())->getContent() ,
             'total' => \Cart::session(Auth::id())->getTotal(),
             'user' => [
                 'name' => Auth::user()->name,
                 'email' => Auth::user()->email,
             ],
            'subtotal' => \Cart::session(Auth::id())->getSubTotal(), ], 200);
    }

    public function destroy($id){

        //    $cart =  Cart::find($id);
        //    $cart->delete();
        \Cart::session(Auth::id())->remove($id);
        return response()->json(['']);

    }

    public function getcartCount()
    {
        $cartCount = count(\Cart::session(Auth::id())->getContent());
        return response()->json($cartCount, 200);
    }


    public function update($id){

        \Cart::session(Auth::id())->update($id, array(
            'quantity' => 1,
          ));
           return response()->json([], 200);
    }


}
