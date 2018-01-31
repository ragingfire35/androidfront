<style lang="less" scoped>
	::-webkit-scrollbar {
	    background: #fff;
	    width: 0;
	}

	::-webkit-scrollbar:hover {
	    background: #fff;
	}

	::-webkit-scrollbar-thumb {
	    background: #fff;
	}

	::-webkit-scrollbar-thumb:hover {
	    background-color:#fff;
	}
	.Home{
		margin-bottom: 1rem;
	}
	.nav-bar{
		width: 100%;
		background: #fff;
		height: .5rem;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 4;
	}
	.nav-btnBox {
		height: .5rem;
		width: 3.2rem;
		overflow-x: auto;
		overflow-y: hidden;
		padding-left: .15rem;
		white-space: nowrap;
		font-size: 0;
		position: relative;
		&>li{
			font-size: .14rem;
			height: .5rem;
			line-height: .5rem;
			display: inline-block;
			vertical-align: top;
			color: #303030;
			background: transparent;
			margin-left: .3rem;
			&:nth-of-type(1){
				margin-left: 0;
			}
			&.active{
				color: #FF8000;
				font-weight: bold;
			}
		}
	}
	.nav-slideDown-btn{
		width: .5rem;
		height: .5rem;
		display: block;
		background: url("../../static/images/home_nav_btn_more_normal.png") center no-repeat;
		background-size: 100% auto;
		position: absolute;
		right: 0;
		top: 0;
	}
	.bottom-line{
		width: .1rem;
		height: .02rem;
		border-radius: .02rem;
		background: #FF8000;
		position: absolute;
		left: .24rem;
		top: .35rem;
	}
	.home-main{
		margin-top: .5rem;
		margin-bottom: 1rem;
	}
	.carousel-img{
		width: 3.3rem;
		height: 1.8rem;
		display: block;
		margin: 0 auto;
	}
	.carousel-mask{
		width: 3.3rem;
		height: 100%;
		position: absolute;
		background: rgba(0,0,0,.2);
		left: 0;
		right: 0;
		margin: 0 auto;
		top: 0;
	}
	.carousel-text{
		font-size: .14rem;
		height: .14rem;
		color: #fff;
		position: absolute;
		left: 0;
		right: 0;
		margin: 0 auto;
		bottom: .16rem;
		padding: 0 .28rem;
    	word-break: break-all;
	}

	.newsList{
		width: 3.3rem;
		margin: 0 auto;
		.newsList_li{
			overflow: hidden;
			margin-bottom: .2rem;

			&>a{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
	}
	.newsLt{
		float: left;
		width: 2.2rem;
		height: .62rem;
		text-align: justify;
		position: relative;
		.news-tt{
			width: 100%;
			text-align: left;
			font-size: .15rem;
			font-weight: bold;
			color: #303030;
			line-height: .22rem;
		   	display: -webkit-box;
		    display: -moz-box;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    word-break: break-all;
		    -webkit-box-orient: vertical;
		    -webkit-line-clamp:2;
		}
		.news-author-info{
			color: #a8a8a8;
			font-size: .12rem;
			height: .12rem;
			text-align: left;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}
	.newsRt{
		width: .94rem;
		height: .62rem;
		float: right;
		img{
			width: 100%;
			height: 100%;
			display: block;

		}
	}
	.load-more-news{
		display: block;
		font-size: .14rem;
		color: #FF8000;
	}
</style>
<style>
	.wc-swiper-container{
		transform: scaleX(.9);
		overflow: visible;
	}
	.wc-slide{
		padding: 0 .03rem;
	}
	.mint-cell{
		background: #fff!important;
	}
	.mint-cell-value {
	    display: block!important;
	    min-height: 3rem;
	}
	.mint-cell-wrapper{
		padding: .15rem!important;
		background: #fff!important;
	}
	.mint-spinner-triple-bounce{
		display: inline-block;
	}
	.mint-loadmore-top{
	    height: 100px;
	    line-height: 140px;
	    margin-top: -100px;
	}
	.mint-loadmore-top span
	{
		font-size: .14rem;
		color: #FF8000;
	}
	.mint-tab-container-wrap{
		min-height: 1rem;
	}
</style>

<template>
  <div class="Home" id='container'>
  	<div class="nav-bar">
  		<ul class="nav-btnBox">
  			<li
  				v-for="item, index in category"
  				:class="{active:ACTIVE == index}"
  				@click="btmLine($event), getNewsShow(item.id, index), active = active"
  				@click.once="getNowNews(item.id, index, 0)"
  				:showId = item.id
  			>{{item.category}}</li>
	  		<div class="bottom-line" v-if="category.length"></div>
  		</ul>
		<router-link to="/NavBtnSort" tag="button" class="nav-slideDown-btn"  v-if="category.length"></router-link>
  	</div>

	<div class="home-main">

		<!-- // 在需要使用的 view 里面引入: lunbo-->
		<wc-swiper
			:autoplay='true'
			ref="swiper"
			:pagination="false"
			@transitionend="fn"
			v-if="banner.length"
		>
		    <wc-slide
		    	v-for="item, index in banner"
		    	:newsId = "item.news_id"
		    	key="index"
		    >
		    	<!-- // 这里放你需要轮播的内容, 比如一张图片 -->
				<div style="position:relative;">
					<router-link :to="{ path: '/NewsDetails', query: { newsid: item.news_id }}" href="javascript:;">
						<img v-lazy="basePath + item.cover_img" alt="" class="carousel-img">
						<div class="carousel-mask">
							<p class="carousel-text">{{item.title | subStrText(20)}}</p>
						</div>
					</router-link>
				</div>
		    </wc-slide>
		</wc-swiper>

		<mt-tab-container v-model="ACTIVE" swipeable id="tab-container" v-if="cateNews.length">

			<mt-tab-container-item
				class="wrapper"
				v-for="nav, navIndex in category"
				:id = "navIndex"
				:key = 'navIndex'
	 			v-infinite-scroll="loadMore"
	  			:infinite-scroll-disabled="loading"
	  			infinite-scroll-distance="10"
	  			infinite-scroll-immediate-check="false"

			><!-- v-if= "navIndex == ACTIVE" -->
				<mt-cell>
					<mt-loadmore
						:top-method="loadTop"
						@top-status-change="handleTopChange"
						ref="loadmore"
						:maxDistance="100"
					>
						<ul class="newsList">
							<li class="newsList_li"
								v-for="item, index in cateNews[navIndex]"

							>
								<router-link :to="{ path: '/NewsDetails', query: { newsid: item.news_id }}" href="javascript:;">
									<div class="newsLt">
										<p class="news-tt">{{item.title}}</p>
										<p class="news-author-info">
											<span class="author-name">{{item.admin_id}}</span>
											<span>&ensp;·&ensp;</span>
											<span class="public-time" :data-timeago="parseInt(item.ctime+'000') | formatDate"></span>
											<span>&ensp;·&ensp;</span>
											<span class="news-source">{{item.source}}</span>
										</p>
									</div>
									<div class="newsRt">
										<img v-lazy="basePath + item.cover_img" alt="">
									</div>
								</router-link>
							</li>
						</ul>
						<a href="javascript:;" class="load-more-news" v-if="navIndex == ACTIVE">
							<p v-if="moreNewsBtn === true" @click="++newspageNumber[ACTIVE]"  @click.prevent="getNowNews(nav.id, navIndex)" class="load-more-newsBtn">
								<span>更多</span>
								<span class="load-news-name">{{nav.category}}新闻</span>
							</p>
							<p style="font-size:.16rem;" v-else-if="moreNewsBtn === false">
								<span>加载中</span>
								<mt-spinner type="triple-bounce" color="#FF8000"></mt-spinner>

							</p>
							<p v-else-if="moreNewsBtn === ''">
								<span>已无更多新闻</span>
							</p>
						</a>
					</mt-loadmore>
				</mt-cell>
			</mt-tab-container-item>
		</mt-tab-container>

	</div>
  </div>
</template>


<script>

	import { Indicator, Loadmore, Toast } from 'mint-ui';
	export default{

		data(){
			return{
				active : '0',//预先指定显示的块，值必须字符串 //侧滑选项卡
				ACTIVE : 0,
				basePath : this.GLOBAL.__PUBLIC__ ,
				banner : [],
				category : ["aa"],
				cateNews: [],
				newspageNumber : [],
				moreNewsBtn : false,
				loading : false,
				topStatus : '',
				allLoaded: false,
			}
		},
		components:{
		},
		watch: {
			ACTIVE : function(val){
				var $this = this;
				$(".nav-btnBox li:eq("+val+")").trigger('click');
			},
			category : function(val){
				for (var i = 0; i < val.length; i++) {
					this.cateNews.push(new Array());
					this.newspageNumber.push(1);
				}
				$(function(){
					var index = window.sessionStorage.recordIndex;
					if( index ){
						setTimeout(function(){
							$(".nav-btnBox li:eq("+index+")").trigger('click');
						}, 200)
					}
				})
			},
			cateNews : function(){
				var $this = this;
				$(function(){
					$this.GLOBAL.agoTime.render(document.querySelectorAll('.public-time'), 'zh_CN');
				})
			},
			topStatus(status) {
				this.topStatus = status;
			}
		},
		beforeCreate(){
			var $this = this;
		},
		mounted(){
			Indicator.open({
			  text: '加载中...',
			  spinnerType: 'fading-circle'
			});
			var $this = this;
		    $.ajax({
     		 	xhrFields: {
                      withCredentials: true
                },//跨域 后端存储session时，cookie不能用，发送此凭据
		     	url: $this.GLOBAL.URL + "index.php/News/index",
		     	type:"post",
		     	dataType: "json",
		     	success:function(data){
		     		$this.bannerFn(data.data.banner);
		     		$this.categoryFn(data.data.category);
		     		$this.newsFn(data.data.news);
					Indicator.close();
		     	}
		    })
		},
		methods:{
			loadMore() {
			  var $this = this;
			  // 防止多次加载
			  if ($this.loading) {
			    return false;
			  }
			  $this.loading = true;
			  setTimeout(() => {
					$(".load-more-newsBtn").trigger('click');
					$this.loading = false;
			  }, 1000)

			},
			loadTop(){
				var selector = $(".nav-btnBox li:eq("+this.ACTIVE+")");
				var index = selector.index();
				var showId = selector.attr("showId");
				this.getNowNews(showId, index, 1, 1);
			},

			handleTopChange(status) {
	        	this.topStatus = status;
	      	},
			bannerFn : function(data){
				var $this = this;
				$.each(data, function(i, j){
					if( j.grade == "1" ){
						$this.banner.push( j )
					}
				});
			},
			categoryFn : function(data){
				this.category = data;
			},
			newsFn : function(data){
				this.cateNews.push(data);
				this.moreNewsBtn = true;
			},
			getNewsShow : function(showId, index){
				var $this = this;
				$this.ACTIVE = index;
				$this.active = "'"+ index +"'";
				window.sessionStorage.recordIndex = index;
			},
			getNowNews : function(showId, index, flag, page){
				var $this = this;
				var showNum = 6;
				if(index == 0 && flag == 0) {
					return;
					//禁止已经预加载的新闻 ，对应的按钮可以点击
				};
				$this.moreNewsBtn = false;
				$this.getNewsShow(showId, index);
			    $.ajax({
	     		 	xhrFields: {
	                      withCredentials: true
	                },//跨域 后端存储session时，cookie不能用，发送此凭据
			     	url: $this.GLOBAL.URL + "index.php/News/cate_news",
			     	type:"post",
			     	dataType: "json",
			     	data:{
			     		category_id	: showId,
			     		page : page || $this.newspageNumber[$this.ACTIVE],
			     		showNum : showNum
			     	},
			     	success:function(data){
			     		if(data.data.length != 0){
			     			if(flag == 1){
			     				$this.cateNews[index] = [];
								$this.$refs.loadmore[parseInt(index)].onTopLoaded();
								let instance = Toast({
									message : "刷新成功",
									position : "bottom"
								});
			     			}
				     		$.each(data.data, function(i ,j){
				     			$this.cateNews[index].push(j);
				     		});
				     		showNum > data.data.length ?
				     			$this.moreNewsBtn = "" :
				     			$this.moreNewsBtn = true;
			     		} else {
			     			$this.moreNewsBtn = '';
			     		}

			     	}
			    });

			},
			fn : function(){
/*				var $this = this;
				$this.ACTIVE = index;	*/
			},
			btmLine : function(e){
				$(function(){
			        var boxL = $(".nav-btnBox").scrollLeft();
			        var bgL = $(e.target).offset().left;
			        var newL = bgL + boxL;
			        var bestL = newL - $(e.target).width() / 2;
			        $('.bottom-line').css({
			        	"transform": "translateX("+ bestL +"px)",
			        	"transition" : "transform 200ms"
			        })
			        $(e.target).addClass('active').siblings('button').removeClass("active");
			        if($(e.target).index() >= 5){
			        	$(".nav-btnBox").scrollLeft(10000);
			        } else {
			        	$(".nav-btnBox").scrollLeft(0);
			        }
				})
			}
		},

		beforeDestroy(){
		}
	}
</script>
