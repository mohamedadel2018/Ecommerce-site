<template>
    <div>
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 sitebar">
					<div class="widget mercado-widget categories-widget">
						<h2 class="widget-title" > <a href='#' @click.prevent="getcatigorys()"> All Categories </a></h2>
						<div class="widget-content">
							<ul class="list-category">
								<li class="category-item has-child-cate" v-for="catigory in catigorys.category" :key="catigory.id">
									<a href="#" class="cate-link" @click.prevent="getproduct(catigory, 'categorie_id')" >{{catigory.name}}</a>

								</li>

							</ul>
						</div>
					</div><!-- Categories widget-->

					<div class="widget mercado-widget filter-widget brand-widget">
						<h2 class="widget-title">Brand</h2>
						<div class="widget-content"  v-if="catigorys.brand">
							<ul class="list-style vertical-list list-limited" data-show="6" v-for="brands in catigorys.brand" :key="brands.id">
                                   <el-radio :label="brands.id"  v-model='checked' @change="getproduct('brand','brand_id')"> {{brands.name}}</el-radio>

							</ul>
						</div>
					</div><!-- brand widget-->

					<div class="widget mercado-widget filter-widget price-filter">
						<h2 class="widget-title">Price</h2>
                        <span  v-if="catigorys.price">
                              {{ catigorys.price.min}} -  {{ catigorys.price.max}}
                        </span>
						<div class="widget-content" v-if="catigorys.price">
                        <el-slider
                            @change="getproduct('','price')"
                                :min="catigorys.price.min"
                                v-model="value"
                                range
                                :max="catigorys.price.max">
                        </el-slider>
						</div>


					</div><!-- Price-->

					<div class="widget mercado-widget filter-widget">
						<h2 class="widget-title">Color</h2>
						<div class="widget-content">
							<ul class="list-style vertical-list has-count-index">
                                <li class="list-item"> <el-radio label="red"  v-model='colororsize' @change="getproduct('color','color')" border>Red</el-radio></li>
                                <li class="list-item"> <el-radio label="blue"  v-model='colororsize' @change="getproduct('color','color')" border>Blue</el-radio></li>
                                <li class="list-item"> <el-radio label="green"  v-model='colororsize' @change="getproduct('color','color')" border>Green</el-radio></li>
                               <li class="list-item">  <el-radio label="yellow"  v-model='colororsize' @change="getproduct('color','color')" border>Yellow</el-radio></li>
                              <li class="list-item">   <el-radio label="white"  v-model='colororsize' @change="getproduct('color','color')" border>white</el-radio></li>

							</ul>
						</div>
					</div><!-- Color -->

					<div class="widget mercado-widget filter-widget">
						<h2 class="widget-title">Size</h2>
						<div class="widget-content">
							<ul class="list-style inline-round ">
                               <li class="list-item"> <el-radio label="S"   v-model='colororsize' @change="getproduct('size','size')" border ></el-radio></li>
                               <li class="list-item">  <el-radio label="M"   v-model='colororsize' @change="getproduct('size','size')" border></el-radio></li>
                                <li class="list-item"> <el-radio label="L"   v-model='colororsize' @change="getproduct('size','size')"  border></el-radio></li>
                               <li class="list-item">  <el-radio label="XL"  v-model='colororsize' @change="getproduct('size','size')" border></el-radio></li>

							</ul>
							<div class="widget-banner">
								<figure><img src="/assets/images/size-banner-widget.jpg" width="270" height="331" alt=""></figure>
							</div>
						</div>
					</div><!-- Size -->

					<div class="widget mercado-widget widget-product">
						<h2 class="widget-title">Popular Products</h2>
						<div class="widget-content">
							<ul class="products">
								<li class="product-item">
									<div class="product product-widget-style">
										<div class="thumbnnail">
											<a href="detail.html" title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]">
												<figure><img src="/assets/images/products/digital_01.jpg" alt=""></figure>
											</a>
										</div>
										<div class="product-info">
											<a href="#" class="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker...</span></a>
											<div class="wrap-price"><span class="product-price">$168.00</span></div>
										</div>
									</div>
								</li>

								<li class="product-item">
									<div class="product product-widget-style">
										<div class="thumbnnail">
											<a href="detail.html" title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]">
												<figure><img src="/assets/images/products/digital_17.jpg" alt=""></figure>
											</a>
										</div>
										<div class="product-info">
											<a href="#" class="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker...</span></a>
											<div class="wrap-price"><span class="product-price">$168.00</span></div>
										</div>
									</div>
								</li>

								<li class="product-item">
									<div class="product product-widget-style">
										<div class="thumbnnail">
											<a href="detail.html" title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]">
												<figure><img src="/assets/images/products/digital_18.jpg" alt=""></figure>
											</a>
										</div>
										<div class="product-info">
											<a href="#" class="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker...</span></a>
											<div class="wrap-price"><span class="product-price">$168.00</span></div>
										</div>
									</div>
								</li>

								<li class="product-item">
									<div class="product product-widget-style">
										<div class="thumbnnail">
											<a href="detail.html" title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]">
												<figure><img src="/assets/images/products/digital_20.jpg" alt=""></figure>
											</a>
										</div>
										<div class="product-info">
											<a href="#" class="product-name"><span>Radiant-360 R6 Wireless Omnidirectional Speaker...</span></a>
											<div class="wrap-price"><span class="product-price">$168.00</span></div>
										</div>
									</div>
								</li>

							</ul>
						</div>
					</div><!-- brand widget-->

				</div><!--end sitebar-->
    </div>
</template>


<script>
export default {
    data(){
        return {
            catigorys:{},
            productBycatigory:{},
            products:{},
            value:[0,1000],
            form:{
                data:'',
                field:''
            },
            checked:[],
             colororsize:[],
        }
    },
    methods: {
        getcatigorys(){
            axios.get('/ApiCatigory').then(res =>{ this.catigorys = res.data;}).catch(error => console.log(error));
        },
        getproduct(catigory,field){
            if(catigory === ''){
            this.form.data =  this.value;
            }else if(catigory === 'brand'){
            this.form.data =  this.checked;
            }else if(catigory === 'color' || catigory === 'size'  ){
                this.form.data =  this.colororsize;
            }
            else{
                this.form.data =  catigory.id;
            }
            this.form.field = field;
            axios.post(`/ApiCatigory/${JSON.stringify(this.form)}`).then(res =>{ Event.$emit('productBycatigory' , res.data); }).catch(error => console.log(error));
            Event.$emit('catigoryName' , catigory.name);
        }
    },
    created(){
         this.getcatigorys();
    }

}
</script>
