<template>
    <div class="summary">
        <div class="order-summary">
            <h4 class="title-box">Order Summary</h4>
            <p class="summary-info"><span class="title">Subtotal</span><b class="index">{{subtotal}}</b></p>
            <p class="summary-info"><span class="title">Shipping</span><b class="index">Free Shipping</b></p>
            <p class="summary-info total-info "><span class="title">Total</span><b class="index">{{total}}</b></p>
        </div>
        <div class="checkout-info">

            <a class="btn btn-checkout" href="/check-out">Check out</a>
            <a class="link-to-shop" href="/shop">Continue Shopping<i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
        </div>
        <div class="update-clear">
            <a class="btn btn-clear" href="#">Clear Shopping Cart</a>
            <a class="btn btn-update" href="#">Update Shopping Cart</a>
        </div>
    </div>
</template>




<script>
export default {
        props:['cartItem','total','subtotal'],
        data(){
            return{

            }
        },
        methods: {

        },
        created() {

        },
}
</script>
