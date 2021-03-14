/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;


Vue.component('pagination',() => import('laravel-vue-pagination'));

window.bus = new Vue();

window.events = new Vue();

/**
 *  this for trans in vuejs
 *  useing (rmariuzzo/Laravel-JS-Localization) package  in github
 */


window.flash = function(message) {
    window.events.$emit('flash',message);
}

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
Vue.use(ElementUI);

window.Event = new Vue();
/**
 * ##########################################
 */
import moment from 'moment';
Vue.filter('timeFormat',  (arg) => {
   return moment().format("Do MMM  YYYY ( h:mm:ss a)");
  });
/**
 * ##########################################
 */

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.component('flashCom',() => import('./components/Flash.vue'));
Vue.component('product-component', () => import('./components/productComponent.vue'));
Vue.component('cartComponent', () => import('./components/CartComponent.vue'));
Vue.component('cartCountComponent', () => import('./components/CartCount.vue'));
Vue.component('cartDetailsComponent', () => import('./components/CartDetails.vue'));
Vue.component('siteBar', () => import('./components/siteBar.vue'));
Vue.component('wishList' , () => import('./components/wishList.vue'));
Vue.component('checkoutPage' ,() => import('./components/checkoutPage.vue'));
Vue.component('catigory' ,() => import('./components/Admin/catigory.vue'));
Vue.component('brand' ,() => import('./components/Admin/brand.vue'));
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
 var Lang = document.getElementsByTagName("html")[0].getAttribute("lang");


 require('lang.js');
 import VueLang from '@eli5/vue-lang-js'
 // get the data source
 import translations from './vue-translations.js';

 Vue.use(VueLang, {
     messages: translations, // Provide locale file
     locale: Lang, // Set locale
    //  fallback: 'ar' // Set fallback lacale
   });

const app = new Vue({
    el: '#app',
    props:['Lang'],
    data:{
        itemCount:0,
        cartItem:[],
    },

    created(){
        bus.$on('added-to-cart', (products) =>{
             this.increaseCounter();
            this.addToCart();
            });
        bus.$on('remove-from-cart', (products)=>{
            this.removeFromCart(products);
        }
        )
    },
    methods:{
        increaseCounter(){
            return this.itemCount++;
        },
        addToCart(products){
            this.cartItem.push(products);
        }
    }

});
