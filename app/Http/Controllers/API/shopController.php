<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\product;
use App\Models\categorie;
class shopController extends Controller
{
    public function index(){
        $somedata  = $this->productData();
        $products = product::latest()->paginate(6);

       return response()->json($products, 200);
    }







    private function productData(){
       return $data = [
            [
                'id' => 1,
                'name' => 'phone',
                'dec' => 'ay hary',
                'image' =>asset('assets/images/products/digital_21.jpg'),
                'price' => 5020,
            ],
            [
                'id' =>2,
                'name' => 'TV',
                'dec' => 'this smart tv',
                'image' =>asset('assets/images/products/digital_20.jpg'),
                'price' => 450,
            ]
            ];
    }

}
