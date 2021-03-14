<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\categorie;
use App\Models\product;
use App\Models\brand;
class ApicategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
            $category = categorie::all();
            $brand = brand::all();
            $min_price = product::min('price');
            $mix_price = product::max('price');
            return response()->json([
                'category' =>  $category ,
                'brand' => $brand,
                'price' =>[
                    'min' => $min_price,
                    'max' => $mix_price  ]
                ], 200);

    }



    public function productByCatigory($data){
        //Don't use RElationshap because we need to make paginate

         $data = json_decode($data);

         $filed = $data->field;
         $data = $data->data;
        if($filed === 'price'){
            $products = $this->priceRange($filed , $data);
        }elseif($filed === 'brand'){
            $products = $this->allbrands($filed , $data);
        }
        else{
        $products = product::where($filed,$data)->paginate(6);
        }

        return response()->json($products, 200);
    }

    public function priceRange($filed,$data){
        $min = $data['0'];
        $max = $data['1'];
        $products = product::whereBetween($filed,[$min , $max])->paginate(6);
        return  $products;
    }


    public function allbrands($filed , $data){
        foreach($data as $datas){
            $dataa =  $datas->id;
        }
        $products = product::whereIn($filed,[$data])->paginate(6);
        return $products;
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
