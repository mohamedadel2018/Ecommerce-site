<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
class productSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        DB::table('products')->insert([
            'title' => 'samsoung Galaxy',
            'dec' => 'this product in very useful',
            'price' => 855.5,
            'Discount' => 200,
            'amunt' => 1,
            'image' => 'digital_20.jpg',
            'categorie_id' => '3',
            'size' =>'S',
            'color'=> 'red',
            'brand_id' => '1',
            'Availability' => '30',

        ]);

        DB::table('products')->insert([
            'title' => 'phone',
            'dec' => 'this product in very useful',
            'price' => 955.5,
            'Discount' => 200,
            'amunt' => 2,
            'image' => 'digital_21.jpg',
            'categorie_id' => '3',
            'size' =>'M',
            'color'=> 'blue',
            'brand_id' => '1',
            'Availability' => '30',

        ]);

        DB::table('products')->insert([
            'title' => 'tablet',
            'dec' => 'this product in very useful',
            'price' => 555.5,
            'Discount' => 200,
            'amunt' => 1,
            'image' => 'digital_01.jpg',
            'categorie_id' => '3',
            'size' =>'L',
            'color'=> 'red',
            'brand_id' => '3',
            'Availability' => '18',

        ]);

        DB::table('products')->insert([
            'title' => 'tablet',
            'dec' => 'this product in very useful',
            'price' => 555.5,
            'Discount' => 200,
            'amunt' => 1,
            'image' => 'digital_05.jpg',
            'categorie_id' => '3',
            'size' =>'XL',
            'color'=> 'red',
            'brand_id' => '4',
            'Availability' => '18',

        ]);

        DB::table('products')->insert([
            'title' => 'mobile samsung',
            'dec' => 'this product in very useful',
            'price' => 555.5,
            'Discount' => 200,
            'amunt' => 3,
            'image' => 'digital_18.jpg',
            'categorie_id' => '3',
            'size' =>'L',
            'color'=> 'red',
            'brand_id' => '1',
            'Availability' => '5',

        ]);

        DB::table('products')->insert([
            'title' => 'mobile samsung x3',
            'dec' => 'this product in very useful',
            'price' => 555.5,
            'Discount' => 200,
            'amunt' => 3,
            'image' => 'digital_19.jpg',
            'categorie_id' => '3',
            'size' =>'S',
            'color'=> 'green',
            'brand_id' => '5',
            'Availability' => '5',
        ]);
        DB::table('products')->insert([
            'title' => 'T-shirt',
            'dec' => 'this product in very useful',
            'price' => 555.5,
            'Discount' => 200,
            'amunt' => 3,
            'image' => 'fashion_07.jpg',
            'categorie_id' => '1',
            'size' =>'S',
            'color'=> 'black',
            'brand_id' => '3',
            'Availability' => '5',
        ]);
        DB::table('products')->insert([
            'title' => 'jacket',
            'dec' => 'this product in very useful',
            'price' => 555.5,
            'Discount' => 200,
            'amunt' => 3,
            'image' => 'fashion_09.jpg',
            'categorie_id' => '1',
            'size' =>'L',
            'color'=> 'blue',
            'brand_id' => '2',
            'Availability' => '5',
        ]);

        DB::table('products')->insert([
            'title' => 'Office',
            'dec' => 'this product in very useful',
            'price' => 555.5,
            'Discount' => 200,
            'amunt' => 3,
            'image' => 'furniture_08.jpg',
            'categorie_id' => '1',
            'size' =>'L',
            'color'=> 'blue',
            'brand_id' => '1',
            'Availability' => '5',
        ]);
        DB::table('products')->insert([
            'title' => 'Office',
            'dec' => 'this product in very useful',
            'price' => 555.5,
            'Discount' => 200,
            'amunt' => 3,
            'image' => 'furniture_08.jpg',
            'categorie_id' => '2',
            'size' =>'L',
            'color'=> 'blue',
            'brand_id' => '1',
            'Availability' => '5',
        ]);
        DB::table('products')->insert([
            'title' => 'bed',
            'dec' => 'this product in very useful',
            'price' => 555.5,
            'Discount' => 200,
            'amunt' => 3,
            'image' => 'furniture_06.jpg',
            'categorie_id' => '2',
            'size' =>'L',
            'color'=> 'white',
            'brand_id' => '2',
            'Availability' => '5',
        ]);
        DB::table('products')->insert([
            'title' => 'couch',
            'dec' => 'this product in very useful',
            'price' => 600.5,
            'Discount' => 200,
            'amunt' => 3,
            'image' => 'furniture_05.jpg',
            'categorie_id' => '2',
            'size' =>'L',
            'color'=> 'blue',
            'brand_id' => '3',
            'Availability' => '5',
        ]);
        DB::table('products')->insert([
            'title' => 'couch',
            'dec' => 'this product in very useful',
            'price' => 120.5,
            'Discount' => 200,
            'amunt' => 3,
            'image' => 'furniture_05.jpg',
            'categorie_id' => '2',
            'size' =>'L',
            'color'=> 'blue',
            'brand_id' => '4',
            'Availability' => '5',
        ]);
        DB::table('products')->insert([
            'title' => 'tools',
            'dec' => 'this product in very useful',
            'price' => 350.5,
            'Discount' => 150,
            'amunt' => 3,
            'image' => 'tools_equipment_7.jpg',
            'categorie_id' => '4',
            'size' =>'',
            'color'=> 'yellow',
            'brand_id' => '5',
            'Availability' => '12',
        ]);
        DB::table('products')->insert([
            'title' => 'motor',
            'dec' => 'this product in very useful',
            'price' => 600.5,
            'Discount' => 150,
            'amunt' => 3,
            'image' => 'tools_equipment_4.jpg',
            'categorie_id' => '4',
            'size' =>'',
            'color'=> 'yellow',
            'brand_id' => '5',
            'Availability' => '15',
        ]);
        DB::table('products')->insert([
            'title' => 'car kid\'s',
            'dec' => 'this product in very useful',
            'price' => 320,
            'Discount' => 150,
            'amunt' => 3,
            'image' => 'kidtoy_03.jpg',
            'categorie_id' => '5',
            'size' =>'',
            'color'=> 'yellow',
            'brand_id' => '5',
            'Availability' => '10',
        ]);
        DB::table('products')->insert([
            'title' => 'game',
            'dec' => 'this product in very useful',
            'price' => 30,
            'Discount' => 150,
            'amunt' => 3,
            'image' => 'kidtoy_06.jpg',
            'categorie_id' => '5',
            'size' =>'',
            'color'=> 'yellow',
            'brand_id' => '5',
            'Availability' => '7',
        ]);
        DB::table('products')->insert([
            'title' => 'creem',
            'dec' => 'this product in very useful for skin',
            'price' => 30,
            'Discount' => 150,
            'amunt' => 3,
            'image' => 'organics_spa_5.jpg',
            'categorie_id' => '6',
            'size' =>'',
            'color'=> 'white',
            'brand_id' => '4',
            'Availability' => '7',
        ]);
        DB::table('products')->insert([
            'title' => 'Face creem',
            'dec' => 'this product in very useful for skin',
            'price' => 35,
            'Discount' => 150,
            'amunt' => 15,
            'image' => 'organics_spa_6.jpg',
            'categorie_id' => '6',
            'size' =>'',
            'color'=> 'white',
            'brand_id' => '4',
            'Availability' => '7',
        ]);
    }
}
