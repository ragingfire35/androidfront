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
		padding-left: .15rem;
		white-space: nowrap;
		font-size: 0;
		position: relative;
		&>button{
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
		background: #FF8000;
		position: absolute;
		left: .24rem;
		top: .35rem;
	}
	.home-main{
		margin-top: .5rem;
	}
	.aa{
		width: 3.3rem;
		height: 1.8rem;
		display: block;
		margin: 0 auto;
	}
	.newsList{
		padding: 0 .15rem;
		margin-top: .2rem;
		li{
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
		text-align: justify;
		.news-tt{
			width: 100%;
			text-align: left;
			font-size: .15rem;
			font-weight: bold;
			color: #303030;
			line-height: .22rem;
		
		}
		.news-author-info{
			color: #a8a8a8;
			font-size: .12rem;
			text-align: left;
			margin-top: .08rem;
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
</style>



<template>	
  <div class="Home">
  	<div class="nav-bar">
  		<div class="nav-btnBox">
	  		<button v-for="item in navBtn" @click="btmLine($event)">{{item}}</button>
	  		<div class="bottom-line"></div>
  		</div>
		<router-link to="/NavBtnSort" tag="button" class="nav-slideDown-btn"></router-link>
  	</div>
	
	<div class="home-main">
		
		<!-- // 在需要使用的 view 里面引入: -->
		<wc-swiper>
		    <wc-slide>
		        <!-- // 这里放你需要轮播的内容, 比如一张图片 -->
		        <img src="../../static/images/9776961_174126981000_2.jpg" alt="" class="aa">
		    </wc-slide>
		</wc-swiper>
		 
			<!-- 		// 循环列表
			<wc-swiper>
			   <wc-slide v-for="(slide, key) in slides" :key="key">
			   </wc-slide>
			</wc-swiper> -->
							 
					<!-- // 异步获取 slides 的时候, 需要在 wc-swiper 上面添加 v-if 判断 -->
			<!-- 		<wc-swiper v-if="slides.length">
			   <wc-slide v-for="(slide, key) in slides" :key="key">
			   </wc-slide>
			</wc-swiper> -->
					 
			<!-- 		// 带配置选项 -->
			<!-- 		<wc-swiper :duration="900" :interval="2000" @transitionend="fn">
			    <wc-slide>
			        // 这里放你需要轮播的内容, 比如一张图片
			    </wc-slide>
			</wc-swiper> -->
		
		<ul class="newsList">
			<li>
				<a href="javascript:;">
					<div class="newsLt">
						<p class="news-tt">如果你也厌烦被影评欺骗，来掀翻这烂片横行的世道</p>
						<p class="news-author-info">
							<span class="author-name">梁风</span>
							<span>&ensp;·&ensp;</span>
							<span class="public-time">32分钟前</span>
							<span>&ensp;·&ensp;</span>
							<span class="news-source">今日头条</span>
						</p>
					</div>
					<div class="newsRt">
						<img src="../../static/images/t01c4b80a2e31d1eec0.jpg" alt="">
					</div>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<div class="newsLt">
						<p class="news-tt">如果你也厌烦被影评欺骗，来掀翻这烂片横行的世道</p>
						<p class="news-author-info">
							<span class="author-name">梁风</span>
							<span>&ensp;·&ensp;</span>
							<span class="public-time">32分钟前</span>
							<span>&ensp;·&ensp;</span>
							<span class="news-source">今日头条</span>
						</p>
					</div>
					<div class="newsRt">
						<img src="../../static/images/t01c4b80a2e31d1eec0.jpg" alt="">
					</div>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<div class="newsLt">
						<p class="news-tt">如果你也厌烦被影评欺骗，来掀翻这烂片横行的世道</p>
						<p class="news-author-info">
							<span class="author-name">梁风</span>
							<span>&ensp;·&ensp;</span>
							<span class="public-time">32分钟前</span>
							<span>&ensp;·&ensp;</span>
							<span class="news-source">今日头条</span>
						</p>
					</div>
					<div class="newsRt">
						<img src="../../static/images/t01c4b80a2e31d1eec0.jpg" alt="">
					</div>
				</a>
			</li>	
			<li>
				<a href="javascript:;">
					<div class="newsLt">
						<p class="news-tt">如果你也厌烦被影评欺骗，来掀翻这烂片横行的世道</p>
						<p class="news-author-info">
							<span class="author-name">梁风</span>
							<span>&ensp;·&ensp;</span>
							<span class="public-time">32分钟前</span>
							<span>&ensp;·&ensp;</span>
							<span class="news-source">今日头条</span>
						</p>
					</div>
					<div class="newsRt">
						<img src="../../static/images/t01c4b80a2e31d1eec0.jpg" alt="">
					</div>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<div class="newsLt">
						<p class="news-tt">如果你也厌烦被影评欺骗，来掀翻这烂片横行的世道</p>
						<p class="news-author-info">
							<span class="author-name">梁风</span>
							<span>&ensp;·&ensp;</span>
							<span class="public-time">32分钟前</span>
							<span>&ensp;·&ensp;</span>
							<span class="news-source">今日头条</span>
						</p>
					</div>
					<div class="newsRt">
						<img src="../../static/images/t01c4b80a2e31d1eec0.jpg" alt="">
					</div>
				</a>
			</li>
			<li>
				<a href="javascript:;">
					<div class="newsLt">
						<p class="news-tt">如果你也厌烦被影评欺骗，来掀翻这烂片横行的世道</p>
						<p class="news-author-info">
							<span class="author-name">梁风</span>
							<span>&ensp;·&ensp;</span>
							<span class="public-time">32分钟前</span>
							<span>&ensp;·&ensp;</span>
							<span class="news-source">今日头条</span>
						</p>
					</div>
					<div class="newsRt">
						<img src="../../static/images/t01c4b80a2e31d1eec0.jpg" alt="">
					</div>
				</a>
			</li>
		</ul>
	</div>
  </div>
</template>


<script>
	

	export default{

		data(){
			return{
				navBtn : [
				    "热点",
					"时事",
					"国内",
					"国际",
					"社会",
					"娱乐",
					"科技",
					"汽车",
					"财经",
					"军事",
					"生活"
				],
				slidesList : [0 ,1],
				list: [1,2]
			}
		},
		components:{
		},
		beforeCreate(){
			var $this = this;
			$this.$root.eventHub.$on('BackNavBtn', (navBtn)=>{
					 $this.navBtn = navBtn;
			});
		},
		mounted(){
			$(".nav-btnBox button:eq(0)").addClass('active');

		},
		methods:{
			btmLine : function(e){
		        var boxL = $(".nav-btnBox").scrollLeft();
		        var bgL = $(e.target).offset().left;
		        var thisCenter = $(e.target).width() / 2 - $('.bottom-line').width() / 2;
		        var newL = bgL + boxL;
		        $('.bottom-line').animate({left:newL+thisCenter},200);
		        $(e.target).addClass('active').siblings('button').removeClass("active");
			}
		},

		beforeDestroy(){
			//通过this.$root.eventHub获取此对象
			//调用$emit 方法
			this.$root.eventHub.$off('BackNavBtn');
			this.$root.eventHub.$emit('NavBtnSort', this.navBtn)	

		}
	}
</script>
