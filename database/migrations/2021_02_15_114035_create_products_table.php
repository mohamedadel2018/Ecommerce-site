<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('dec');
            $table->float('price');
            $table->float('Discount')->nullable();
            $table->string('image')->default(asset('assets/images/products/digital_20.jpg'));
            $table->integer('amunt');
            $table->integer('Availability');
            $table->unsignedInteger('categorie_id')->nullable();
            $table->foreign('categorie_id')->references('id')->on('categories')->onDelete('cascade');
            $table->unsignedInteger('brand_id');
            $table->string('size')->nullable();
            $table->string('color')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
