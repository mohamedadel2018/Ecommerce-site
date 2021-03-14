<template>
    <div>
        		<div class="wrap-address-billing">
					<h3 class="box-title">Billing Address</h3>
					<form  method="post" >
						<p class="row-in-form">
							<label for="fname">name<span>*</span></label>
							<input id="fname"  type="text" name="name"  v-model="form.name" placeholder="Your name">
                           <!-- <label> <span v-show="nameError"> your name is Required</span></label> -->
						</p>
						<p class="row-in-form">
							<label for="email">Email Addreess:</label>
							<input id="email" type="email" name="email" v-model="form.email" placeholder="Type your email">

                    	</p>
						<p class="row-in-form">
							<label for="phone">Phone number<span>*</span></label>
							<input id="phone" type="text" name="phone" v-model="form.phone" placeholder="Your number">
						    <label> <span v-show="nameError"> your number must be more then 11 number</span></label>
                        </p>
						<p class="row-in-form">
							<label for="add">Address:</label>
							<input id="add" type="text" name="add" v-model="form.adderss" placeholder="Street at apartment number">
						</p>
						<p class="row-in-form">
							<label for="country">Country<span>*</span></label>
							<input id="country" type="text" name="country" v-model="form.country" placeholder="Like Cairo">
						</p>
						<p class="row-in-form">
							<label for="zip-code">Postcode / ZIP:</label>
							<input id="zip-code" type="text" name="zip-code" v-model="form.postcode" placeholder="Your postal code">
						</p>
						<p class="row-in-form">
							<label for="city">Town / City<span>*</span></label>
							<input id="city" type="text" name="city" v-model="form.city" placeholder="City name Like (nasr city)">
						</p>
						<p class="row-in-form fill-wife">
							<label class="checkbox-field">
								<input name="create-account" id="create-account" value="forever" type="checkbox">
								<span>Create an account?</span>
							</label>
							<label class="checkbox-field">
								<input name="different-add" id="different-add" v-model="shippingDisplay" type="checkbox">
								<span>Ship to a different address?</span>
							</label>
						</p>
					</form>
                     <!-- if you will do ship to anther address -->
                    <!-- <form  method="post"  v-if='shippingDisplay'>

						<p class="row-in-form">
							<label for="fname">name<span>*</span></label>
							<input id="fname"  type="text" name="name"  v-model="form.name" placeholder="Your name">
                           <label> <span v-show="nameError"> your name is Required</span></label>
						</p>

						<p class="row-in-form">
							<label for="email">Email Addreess:</label>
							<input id="email" type="email" name="email" v-model="form.email" placeholder="Type your email">

                    	</p>
						<p class="row-in-form">
							<label for="phone">Phone number<span>*</span></label>
							<input id="phone" type="text" name="phone" v-model="form.phone" placeholder="Your number">
						    <label> <span v-show="nameError"> your number must be more then 11 number</span></label>
                        </p>
						<p class="row-in-form">
							<label for="add">Address:</label>
							<input id="add" type="text" name="add" v-model="form.adderss" placeholder="Street at apartment number">
						</p>
						<p class="row-in-form">
							<label for="country">Country<span>*</span></label>
							<input id="country" type="text" name="country" v-model="form.country" placeholder="Like Cairo">
						</p>
						<p class="row-in-form">
							<label for="zip-code">Postcode / ZIP:</label>
							<input id="zip-code" type="text" name="zip-code" v-model="form.postcode" placeholder="Your postal code">
						</p>
						<p class="row-in-form">
							<label for="city">Town / City<span>*</span></label>
							<input id="city" type="text" name="city" v-model="form.city" placeholder="City name Like (nasr city)">
						</p>
						<p class="row-in-form fill-wife">
							<label class="checkbox-field">
								<input name="create-account" id="create-account" value="forever" type="checkbox">
								<span>Create an account?</span>
							</label>
							<label class="checkbox-field">
								<input name="different-add" id="different-add" v-model="shippingDisplay" type="checkbox">
								<span>Ship to a different address?</span>
							</label>
						</p>
					</form> -->
				</div>
                	<div class="summary summary-checkout">
					<div class="summary-item payment-method">
						<h4 class="title-box">Payment Method</h4>
						<p class="summary-info"><span class="title">Check / Money order</span></p>
						<p class="summary-info"><span class="title">Credit Cart (saved)</span></p>
						<div class="choose-payment-methods">
							<label class="payment-method">
								<input name="cach_on_delivery" id="payment-method-bank" value='cach_on_delivery' v-model="payment_type"  type="radio">
								<span>Cash On Delivery</span>
								<span class="payment-desc">You Will Pay when you Receive the order</span>
							</label>
							<label class="payment-method">
								<input name="paypal" id="payment-method-paypal" value='paypal' v-model="payment_type" type="radio">
								<span>Paypal</span>
								<span class="payment-desc">pay with Your paypal account</span>
							</label>
						</div>
                        <h4 class="title-box f-title" style="margin-top:30px;">Your Order</h4>
                        <ul v-if="cartItems.total > 0 ">
                            <li class="pr-cart-item" v-for="cartItem in cartItems.cartItems" :key="cartItem.id" >
                                <div class="product-name">
                                    <div class="link-to-product" href="#">{{cartItem.name}} X {{cartItem.quantity}} </div>
                                </div>
                                    <div class="price-field produtc-price"><p class="price">${{cartItem.price}}</p></div>
                            </li>
                        </ul>
                         <ul v-else>
                           <li>your cart is Empty </li>
                        </ul>
						<p class="summary-info grand-total"><span>Grand Total</span> <span class="grand-total-price"> ${{cartItems.total}}</span></p>
						<a href="#" class="btn btn-medium" @click.prevent="palceOrder()">Place order now</a>
					</div>
					<div class="summary-item shipping-method">
						<h4 class="title-box f-title">Shipping method</h4>
						<p class="summary-info"><span class="title">Flat Rate</span></p>
						<p class="summary-info"><span class="title">Fixed $50.00</span></p>
						<h4 class="title-box">Discount Codes</h4>
						<p class="row-in-form">
							<label for="coupon-code">Enter Your Coupon code:</label>
							<input id="coupon-code" type="text" name="coupon-code" value="" placeholder="">
						</p>
						<a href="#" class="btn btn-small">Apply</a>
					</div>
				</div>

    </div>
</template>


<script>
export default {
    data() {
        return {
            shippingDisplay: false,
            form:{
            },
            cartItems:'',
            shipping:{},
             payment_type:'cach_on_delivery',
        }
    },
    methods: {
          getCart(){
            axios.get('/ApiCart').then(res => {this.cartItems = res.data; }).catch(error => console.log(error));
            },
            palceOrder(){
                axios.post('/checkout',{
                    shipping : this.form,
                    shipping_address : this.shippingDisplay,
                     payment_type : this.payment_type,
                }).then(res =>{}).catch(err => {err});
            }
    },
    created(){
        this.getCart();
    },
    computed:{
        nameError(){
        //   return   this.form.phone.length > 0 && this.form.phone.length < 11 ;
        }
    }

}
</script>
