<template>
    <div>
        <div  v-if="cartItems.total > 0">
        <li class="pr-cart-item" v-for="cartItem in cartItems.cartItems" :key="cartItem.id" >
            <div class="product-image" >
                <figure><img :src="'/assets/images/products/' + cartItem.attributes['image']" alt=""></figure>
            </div>
            <div class="product-name">

                <a class="link-to-product" href="#">{{cartItem.name}}</a>
            </div>
            <div class="price-field produtc-price"><p class="price">${{cartItem.price}}</p></div>
            <div class="quantity">
                <div class="quantity-input">
                    <input type="text" name="product-quatity" :value="cartItem.quantity" data-max="10" pattern="[0-9]*" >
                    <a class="btn btn-increase"  @click="addamunt(cartItem)" @change="updatequantity(cartItem.id)"></a>
                    <a class="btn btn-reduce"  @click="subamunt(cartItem)"></a>
                </div>
            </div>
            <div class="price-field sub-total"  ><p class="price">${{ cartItem.price * cartItem.quantity}}</p></div>
            <div class="delete" @click="DeleteCart(cartItem.id)">
                <a  class="btn btn-delete" >
                    <span>Delete from your cart</span>
                    <i class="fa fa-times-circle" aria-hidden="false"></i>
                </a>
            </div>
        </li>
        </div>
        <div v-else>
            <h3 class="text-center">Your cart is Empty ,Shopping and Add To your cart  </h3>
        </div>
         <check-Out  :total='cartItems.total' :subtotal="cartItems.subtotal"></check-Out>
    </div>

</template>




<script>
import checkOut from './checkOut';
export default {
    data() {
        return {
            total: '',
            cartItems:[],
            totalPrice: '',
            cartupdate:'',
        }
    },
    components:{ checkOut },
    props:['userId'],
    methods: {
        getCart(){
            axios.get('/ApiCart').then(res => {this.cartItems = res.data; }).catch(error => console.log(error));
        },
        DeleteCart(id){
            axios.delete(`/ApiCart/${id}`).then(res => {res.data; this.getCart(); flash('product is Deleted from your Cart', 'success');})
        },
        addamunt(cartItem){
        if(cartItem.quantity < cartItem.attributes['Availability']){
             this.updatequantity(cartItem.id);
               return  cartItem.quantity++;
            }else{
                flash('Maximum limit From ' +  cartItem.name , 'success');
            }
        },
        subamunt(cartItem){
            if(cartItem.quantity > 0){
               return  cartItem.quantity--;
            }else if(cartItem.quantity == 0){
            this.DeleteCart(cartItem.id);
            this.getCart();
            }
        },
        updatequantity(id){
            axios.put(`/ApiCart/${id}`).then(res => { res.data; this.getCart();}).then(error => console.log(error));
        }

    },
    created(){
        this.getCart();
    },

}
</script>
