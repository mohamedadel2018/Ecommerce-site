<template>
<div>
            <div class="wrap-shop-control">

						<h1 class="shop-title"> {{ catigoryName || 'All Categories' }}</h1>

						<div class="wrap-right">

							<div class="sort-item orderby ">
								<select name="orderby" class="use-chosen" >
									<option value="menu_order" selected="selected">Default sorting</option>
									<option value="popularity">Sort by popularity</option>
									<option value="rating">Sort by average rating</option>
									<option value="date">Sort by newness</option>
									<option value="price">Sort by price: low to high</option>
									<option value="price-desc">Sort by price: high to low</option>
								</select>
							</div>

							<div class="sort-item product-per-page">
								<select name="post-per-page" class="use-chosen" >
									<option value="12" selected="selected">12 per page</option>
									<option value="16">16 per page</option>
									<option value="18">18 per page</option>
									<option value="21">21 per page</option>
									<option value="24">24 per page</option>
									<option value="30">30 per page</option>
									<option value="32">32 per page</option>
								</select>
							</div>

							<div class="change-display-mode">
								<a href="#" class="grid-mode display-mode active"><i class="fa fa-th"></i>Grid</a>
								<a href="list.html" class="list-mode display-mode"><i class="fa fa-th-list"></i>List</a>

							</div>

						</div>

					</div><!--end wrap shop control-->

        <div class="row">
                        <!-- <button @click="showproduct()"  class="btn add-to-cart"> Reload Items</button> -->
						<ul class="product-list grid-products equal-container">
                        <div :key="product.id" v-for="product in products.data">
							<li class="col-lg-4 col-md-6 col-sm-6 col-xs-6 ">
								<div class="product product-style-3 equal-elem ">
									<div class="product-thumnail">
										<a :href="'details/' + product.id" :title="product.title">
                                        <figure><img :src="'/assets/images/products/' + product.image" :alt="product.title">
                                        </figure>

                                    	</a>
									</div>
									<div class="product-info">

										<div class="wrap-price"><span class="product-price">{{product.title}}</span></div>
                                        <a href="#" class="product-name"><span> {{product.price}}</span></a>
                                        <div class="wrap-price"><span class="product-price">Availability: {{product.Availability}}</span></div>
										<a @click="addToCart(product)" class="btn add-to-cart">Add To Cart</a>
                                        <a @click="addToWishlist(product)" class="btn add-to-cart">Add To Wishlist</a>
									</div>
								</div>
							</li>
                        </div>
                        </ul>
        </div>
                    <div class="wrap-pagination-info">
						<ul class="page-numbers">
                             <pagination :data="products" @pagination-change-page="getResults"  :limit="1" :show-disabled='true'>
                                 <span slot="prev-nav">&lt; Previous</span>
                            	 <span slot="next-nav">Next &gt;</span>
                             </pagination>

						</ul>
						<p class="result-count">Showing {{products.from}}-{{products.to}} of {{products.total}} result</p>
					</div>


</div>
</template>


<script>
export default {
    data(){
        return {
                products:{},
                catigoryName:'',
        }
    },
    props:{ userId: '',  },

    methods: {
        showproduct(){
            axios.get('api/Apishop').then(res =>{ this.products = res.data;})
            .catch(err=>console.log(err));
        },

        addToCart(product){
           axios.post('/ApiCart',{ product ,  user: {id: this.userId}})
           .then(res => {
               if(res.data.msg == 'add done'){
                    flash('Added to your cart', 'success');
                $('#success').html(res.data.message)}
                else{
                    flash('Sorry, You should be login', 'success');
                     $('#success').html(res.data.message)
                }
                })
                .catch(err => { console.log(err)});
        },

        addToWishlist(product){
           axios.post('/ApiWishlist', product).then(res => {
                if(res.data.msg == 'Added to your Wishlist'){
                        flash(res.data.msg, 'success');
                    $('#success').html(res.data.message)
                    }
                    else if(res.data.msg == 'product is already added'){
                        flash(res.data.msg, 'success');
                        $('#success').html(res.data.message)
                    }
                    else{
                        flash('Sorry, You should be login', 'success');
                        $('#success').html(res.data.message)
                    }
                }).catch(err => {console.log(err);})
        },

        getResults(page = 1) {
			axios.get('api/Apishop?page=' + page)
				.then(response => {
					this.products = response.data;
				});
		}
    },

    created(){
            this.showproduct();
            // for: gate product peoduct fillter By catigory
            Event.$on('productBycatigory',(products) =>{
                    this.products = products;

            });
            // for: change catigory name in product page
            Event.$on('catigoryName',(catigoryName) =>{
                    this.catigoryName = catigoryName;
            });

            Event.$on('wishlistaddToCart', (wishlistItem)=>{
                this.addToCart(wishlistItem);
            });
        },

 }

</script>
