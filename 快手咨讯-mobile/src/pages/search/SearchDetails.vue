<style lang="less" scoped>
	.baseBorderRadius(@radius) {
	  border-radius: @radius;
	  -webkit-border-radius: @radius;
	  -o-border-radius: @radius;
	  -moz-border-radius: @radius;
	  -ms-border-radius: @radius;
	}
	.SearchDetails{
		margin-bottom: 1rem;
	}
	.searchBox{
		height: .5rem;
		line-height: .5rem;
		position: relative;
		padding: 0 .15rem;
		&>em{
			width: .34rem;
			height: .3rem;
			display: block;
			position: absolute;
			top: .1rem;
			left: .15rem;
			background: url("../../../static/images/general_btn_search_normal.png") center no-repeat;
			background-size: 100% auto;
		}
		&>input{
			width: 100%;
			height: .3rem;
			background: #F8F8F8;
			.baseBorderRadius(.3rem);
			padding-left: .34rem;
			font-size: .13rem;
			float: left;
			margin-top: .1rem;
		}
		&>button{
			height:.3rem;
			width: .34rem;
			background: url("../../../static/images/search_btn_clean.png") center no-repeat;
			background-size: 100% auto;
			color: #FF8000;
			font-size: .14rem;
			position: absolute;
			top: .1rem;
			right: .16rem;
		}
	}
	.theLatest-tt,
	.history-tt
	{
		font-size: .12rem;
		color: #a9a9a9;
		height: .5rem;
		line-height: .44rem;
		text-align: left;
		padding-left: .15rem;
	}
	.history-tt{
		height: .8rem;
		line-height: .8rem;
	}
	
	.newsList{
		padding: 0 .15rem;
		li{
			overflow: hidden;
			margin-bottom: .2rem;
			&:last-of-type{
				margin-bottom: 0;
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
	}
	.news-author-info{
		color: #a8a8a8;
		font-size: .12rem;
		text-align: left;
		margin-top: .08rem;
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
	.history-list{
		padding: 0 .15rem;
		text-align: left;
		li{
			margin-bottom: .14rem;
		}
	}
	.his-bt{
		font-size: .15rem;
		color: #000000;
		font-weight: bold;
		line-height: .24rem;
		letter-spacing: .01rem;
		text-align: justify;
	}
</style>




<template>	
  <div class="SearchDetails">
  	<div class="searchBox">
  		<em></em>
  		<input type="text" placeholder="请输入要搜索的关键字">
  		<button></button>
  	</div>
	<div class="search-details">
		<div class="theLatest">
			<p class="theLatest-tt">最新</p>
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
							<img src="../../../static/images/t01c4b80a2e31d1eec0.jpg" alt="">
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
							<img src="../../../static/images/t01c4b80a2e31d1eec0.jpg" alt="">
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
							<img src="../../../static/images/t01c4b80a2e31d1eec0.jpg" alt="">
						</div>
					</a>
				</li>	

			</ul>
		</div>

		<div class="history-related">
			<p class="history-tt">历史相关</p>
			<ul class="history-list">
				<li>
					<a href="javascript:;">
						<p class="his-bt">
							人也厌烦被影评欺骗，来掀翻这烂片横行的世道人也厌烦被影评欺骗
						</p>
						<p class="news-author-info">
							<span class="author-name">梁风</span>
							<span>&ensp;·&ensp;</span>
							<span class="public-time">32分钟前</span>
							<span>&ensp;·&ensp;</span>
							<span class="news-source">今日头条</span>
						</p>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<p class="his-bt">
							人也厌烦被影评欺骗，来掀翻这烂片横行的世道骗，来掀翻这烂
						</p>
						<p class="news-author-info">
							<span class="author-name">梁风</span>
							<span>&ensp;·&ensp;</span>
							<span class="public-time">32分钟前</span>
							<span>&ensp;·&ensp;</span>
							<span class="news-source">今日头条</span>
						</p>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<p class="his-bt">
							人也厌烦被影评欺骗，来掀翻这烂片横行的世道
						</p>
						<p class="news-author-info">
							<span class="author-name">梁风</span>
							<span>&ensp;·&ensp;</span>
							<span class="public-time">32分钟前</span>
							<span>&ensp;·&ensp;</span>
							<span class="news-source">今日头条</span>
						</p>
					</a>
				</li>
			</ul>
		</div>

	</div>
  </div>
</template>


<script>
	export default{
		data(){
			return{

			}
		},
		components:{
		},	
		mounted(){
			
		},
		methods :{
		},
		beforeDestroy(){
		}
	}
</script>
