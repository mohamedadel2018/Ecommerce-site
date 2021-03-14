<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\detailsController;
use App\Http\Controllers\API\ApiCartController;
use App\Http\Controllers\API\ApicategoryController;
use App\Http\Controllers\API\ApiWishlistController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\orderController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\adminbrandController;
use App\Http\Controllers\Admin\admincatigoryController;
use App\Http\Controllers\Admin\adminproductController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(
    [
        'prefix' => LaravelLocalization::setLocale(),
        'middleware' => [ 'localeSessionRedirect', 'localizationRedirect', 'localeViewPath' ]
    ], function(){ //start localization


Route::get('/', function () {
    return view('pages.Home');
});

Route::get('/about-us', function () {
    return view('pages.about-us');
});
Route::get('/cart-view', function () {
    return view('pages.cart');
});
Route::get('Cart',[CartController::class,'index'])->Middleware('auth');
Route::get('Add-to-Cart/{product}',[CartController::class,'store'])->Middleware('auth')->name('cart.store');
Route::get('Cart-delete/{product}',[CartController::class,'destroy'])->Middleware('auth')->name('cart.destroy');


Route::get('shop',[ShopController::class,'index']);


Route::get('check-out',[CheckoutController::class,'index'])->Middleware('auth');

Route::get('contact-us',[ContactUsController::class,'index']);

Route::get('details/{product}', [detailsController::class,'ReturnDetailsProduct'])->Middleware('auth');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::get('wishList',function(){
    return view('pages.wishList');
});



});  // end localization


/**
 * this route is her for Auth::user();
 *  */
Route::apiResources(['ApiCart' => ApiCartController::class]);
Route::get('cartCount',[ApiCartController::class , 'getcartCount']);
Route::apiResources(['ApiWishlist' => ApiWishlistController::class]);


Route::get('ApiCatigory' , [ApicategoryController::class,'index']);
Route::post('ApiCatigory/{data}' , [ ApicategoryController::class,'productByCatigory']);





Route::post('checkout',[orderController::class, 'checkout']);


//admin Login Page
Route::get('/admin', function(){
    return view('admin.login');
});

Route::post('/checkLogin', [AdminController::class , 'checkadminlogin'])->name('checkadminlogin');

Route::group(['prefix' => 'admin' , 'middleware' => 'auth:admin'],function () {

    Route::get('dashboard',[ AdminController::class ,'AdminDashboard'])->name('dashboard');
    Route::get('catigory',function(){
        return view('admin.components.catigory');
    })->name('catigory');
    Route::get('brand',function(){
     return view('admin.components.brand');
    })->name('brand');

    Route::apiResources(['adminCatigory' => admincatigoryController::class]);
    Route::apiResources(['adminBrand' => adminbrandController::class]);
    Route::apiResources(['adminProduct' => adminproductController::class]);
});
