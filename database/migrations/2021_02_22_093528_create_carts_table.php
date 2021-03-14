<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title')->nullable();
            $table->string('dec')->nullable();
            $table->float('price')->nullable();
            $table->float('Discount')->nullable();
            $table->string('image')->nullable();
            $table->integer('amunt')->nullable();
            $table->integer('Availability')->nullable();
            $table->unsignedInteger('product_id')->nullable();
            $table->foreignId('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
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
        Schema::dropIfExists('carts');
    }
}
