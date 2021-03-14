<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;


class brandSeeder extends Seeder{


public function run(){
    DB::table('brands')->insert([
        'name' => 'Fashion Clothings'
    ]);
    DB::table('brands')->insert([
        'name' => 'Laptop Batteries'
    ]);
    DB::table('brands')->insert([
        'name' => 'Printer & Ink'
    ]);
    DB::table('brands')->insert([
        'name' => 'CPUs & Prosecsors'
    ]);
    DB::table('brands')->insert([
        'name' => 'Sound & Speaker'
    ]);
    DB::table('brands')->insert([
        'name' => 'Shop Smartphone & Tablets'
    ]);

}

}
