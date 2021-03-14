<template>
        <div class="wrap-icon-section minicart">
            <a :href="cartlink" class="link-direction">
                <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                <div class="left-info">
                        <span class="index">
                           {{cartCount}} items</span>
                    <span class="title">CART</span>
                </div>
            </a>
        </div>
</template>

<script>
export default {
    props:['cart','cartlink'],
    data(){
        return{
            cartCount:'',
        }
    },
    methods: {
        getCount(){
            axios.get('/cartCount').then(res => {this.cartCount = res.data}).catch(err => {console.log(err)});
        }
    },
    created(){
         this.getCount();
        //  Event.$on('cartCount', function(){
        //     this.getCount();
        // });
    }
}
</script>
