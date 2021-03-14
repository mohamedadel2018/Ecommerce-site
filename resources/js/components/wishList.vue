<template>
    <div>
        <li class="pr-cart-item" v-for="(wishlistItem,index) in wishlistItems.wishLists" :key="index" >
            <div class="product-image">
                <figure><img :src="'/assets/images/products/' + wishlistItem.image" alt=""></figure>
            </div>
            <div class="product-name">

                <a class="link-to-product" :href="'details/' + wishlistItem.id" :title="wishlistItem.title">{{wishlistItem.title}}</a>
            </div>
             <div class="quantity">
                <div class="dec">
                    <a @click.prevent="addToCart(wishlistItem)" class="btn btn-primary">Add To Cart {{ $trans('auth.test') }}</a>
                </div>
             </div>
            <div class="price-field produtc-price"><p class="price">${{wishlistItem.price}}</p></div>
            <div class="quantity">
                <ul>
                    <li>
                          <p class="dec" href="#">{{wishlistItem.dec}} </p>
                     </li>
                </ul>
            </div>
            <div class="delete" @click="Deletewishlist(wishlistItem.id)">
                <a  class="btn btn-delete" >
                    <span>Delete from your wishlist</span>
                    <i class="fa fa-times-circle" aria-hidden="false"></i>
                </a>
            </div>
        </li>

    </div>

</template>




<script>
import checkOut from './checkOut';
export default {
    data() {
        return {
            total: '',
            wishlistItems:[],
            totalPrice: '',
            wishlistupdate:'',
        }
    },
    components:{ checkOut },
    props:['userId'],
    methods: {
        getwishlist(){
            axios.get('/ApiWishlist').then(res => {this.wishlistItems = res.data; console.log(res.data)}).catch(error => console.log(error));
        },
        Deletewishlist(id){
            axios.delete(`/ApiWishlist/${id}`).then(res => {res.data; this.getwishlist(); flash('product is Deleted from your wishlist', 'success');})
        },

        updatequantity(id){
            axios.put(`/ApiWishlist/${id}`).then(res => { res.data; this.getwishlist();}).then(error => console.log(error));
        },
        addToCart(product){
            this.$lang.setLocale('en');
           axios.post('/ApiCart',{ product })
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
        }

    },
    created(){
        this.getwishlist();
    },
    computed:{

    }

}
</script>


<style scope>
.dec{
    font-size: 13px;
    font-weight: bold;
    color: black;
    width: 360px;
    max-width: 420;
    display:block;
    cursor:default;

}
a{
    text-decoration: none;
    color: black;

}

</style>
