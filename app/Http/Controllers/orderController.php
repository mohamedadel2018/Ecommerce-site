<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Order;
use App\Models\order_item;
class orderController extends Controller
{
    public function checkout(Request $request){
        $user = Auth::user();
        $shipping_address = '';

        if($request->shipping_address === true){
            $shipping_address = $request->shipping;
        }else {
            $shipping_address = $user->address;
        }

        $payment_type = $request->payment_type;

        $total = \Cart::session(Auth::id())->getTotal();

        $order = new Order();
        $order->user_id = $user->id;
        $order->Shipping_address = json_encode($shipping_address);
        $order->payment_type = $payment_type;
        $order->total =  $total;
        $order->sub_total = \Cart::session(Auth::id())->getSubTotal();
        $order->save();

        $items = \Cart::session(Auth::id())->getContent();

        foreach($items as $row) {
        $order_item = new order_item();
        $order_item->order_id = $order->id;
        $order_item->item_name = $row->name;
        $order_item->item_price = $row->price;
        $order_item->item_quantity = $row->quantity;
        $order_item->save();
    }
     \Cart::session(Auth::id())->clear();
    return 'ok';

    }
}
