@extends('layout.app')
@section('content')


	<!--main area-->
	<main id="main" class="main-site left-sidebar">

		<div class="container">

			<div class="wrap-breadcrumb">
				<ul>
					<li class="item-link"><a href="#" class="link">home</a></li>
					<li class="item-link"><span>Digital & Electronics</span></li>
				</ul>
			</div>
			<div class="row">

				<div class="col-lg-9 col-md-8 col-sm-8 col-xs-12 main-content-area">

					<div class="banner-shop">
						<a href="#" class="banner-link">
							<figure><img src="{{asset('assets/images/shop-banner.jpg')}}" alt=""></figure>
						</a>
					</div>


                    <flash-Com message=""></flash-Com>
                    <product-component ></product-component>




				</div><!--end main products area-->
                    <site-Bar></site-Bar>


			</div><!--end row-->

		</div><!--end container-->

	</main>
	<!--main area-->

@endsection
