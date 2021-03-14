<template>
    <div>
        <li class="pr-cart-item">
            <div class="product-image">
                <figure><img src="assets/images/products/digital_18.jpg" alt=""></figure>
            </div>
            <div class="product-name">
                <a class="link-to-product" href="#"></a>
            </div>
            <div class="price-field produtc-price"><p class="price"> {{cartdetil.price}} </p></div>
            <div class="quantity">
                <div class="quantity-input">
                    <input type="text" name="product-quatity" :value="cartdetil.quantity" data-max="30" pattern="[0-9]*" >
                    <a class="btn btn-increase" @click="addToCart()"  href="#"></a>
                    <a class="btn btn-reduce"  @click="removeFromCart()" href="#"></a>
                </div>
            </div>
            <div class="price-field sub-total"><p class="price"> {{cartdetil.price}}</p></div>
            <div class="delete">
                <a href="" class="btn btn-delete" title="">
                    <span>Delete from your cart</span>
                    <i class="fa fa-times-circle" aria-hidden="false"></i>
				</a>
				</div>
			</li>
    </div>
</template>


<script>
export default {
props:['cartdetil'],

methods:{
    addToCart(item){
         bus.$emit('added-to-cart',item);
    },
    removeFromCart(item){
        bus.$emit('remove-from-cart',item);
    }
},
}
</script>
