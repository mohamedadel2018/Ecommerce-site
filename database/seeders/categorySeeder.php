<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;


class categorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'name' => 'Fashion & Accessories',
        ]);
        DB::table('categories')->insert([
            'name' => 'Furnitures & Home Decors',
        ]);
        DB::table('categories')->insert([
            'name' => 'Digital & Electronics',
        ]);
        DB::table('categories')->insert([
            'name' => 'Tools & Equipments',
        ]);
        DB::table('categories')->insert([
            'name' => 'Kid’s Toys',
        ]);
        DB::table('categories')->insert([
            'name' => 'Organics & Spa',
        ]);

    }
}
