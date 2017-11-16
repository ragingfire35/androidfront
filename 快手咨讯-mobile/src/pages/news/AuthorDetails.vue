<style lang="less" scoped>
	.banner{
		width: 100%;
		height: 2.7rem;
		position: relative;
		&>img{
			width: 100%;
			height: 2.7rem;
			display: block;
		}
		.author-info{
			position: absolute;
			bottom: .15rem;
			left: 0;
			text-align: left;
			padding: 0 .15rem;
			/* text-shadow: .01rem .01rem 0rem #000; */
			.author-name{
				color: #fff;
				width: 100%;
				height: .6rem;
				overflow: hidden;
				span{
					float: left;
					height: .6rem;
					line-height: .6rem;
					&:nth-of-type(1){
						font-size: .24rem;
					}
					&:nth-of-type(2){
						font-size: .14rem;
						line-height: .72rem;
						margin-left: .18rem;
					}
				}
			}
			.author-comment{
				font-size: .12rem;
				line-height: .2rem;
				letter-spacing: -.0045rem;
				text-align: justify;
				color: #fff;
			}
		}
	}
	.author-publicNews{
		padding: 0 .15rem;
		text-align: left;
	}
	.publicNews-num{
		font-size: .14rem;
		color: #909090;
		height: .54rem;
		line-height: .54rem;
		span{
			color: #838383;
		}
	}
	.publicNews-main{
		li{
			margin-bottom: .2rem;
		}
	}
	.publicNews-tt{
		font-size: .15rem;
		color: #303030;
		letter-spacing: .01rem;
	}
	.publicNews-info{
		margin-top: .1rem;
		font-size: .1rem;
		color: #A0A0A0;
	}
</style>
<template>
	<div class="author-details">
		<div class="banner">
			<img src="../../../static/images/t01c4b80a2e31d1eec0.jpg" alt="">
			<div class="author-info">
				<p class="author-name">
					<span>梁风</span>
					<span>战地小记者</span>
				</p>
				<p class="author-comment">
					请大家关注文娱口和教育，合作微信：wxid_9415034150212战地小记者，带你看世界
				</p>
			</div>

		</div>

		<div class="author-publicNews">
			<p class="publicNews-num">
				共发表&ensp;<span>109</span>&ensp;篇
			</p>
			<ul class="publicNews-main">
				<li>
					<a href="javascript:;">
						<p class="publicNews-tt">
							如果你也厌烦被影评欺骗，来掀翻这烂片横行的世道
						</p>
						<p class="publicNews-info">
							<span>梁风</span>
							<span>&ensp;·&ensp;</span>
							<span>32分钟前</span>
							<span>&ensp;·&ensp;</span>
							<span>今日头条</span>
						</p>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<p class="publicNews-tt">
							如果你也厌烦被影评欺骗，来掀翻这烂片横行的世道
						</p>
						<p class="publicNews-info">
							<span>梁风</span>
							<span>&ensp;·&ensp;</span>
							<span>32分钟前</span>
							<span>&ensp;·&ensp;</span>
							<span>今日头条</span>
						</p>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<p class="publicNews-tt">
							如果你也厌烦被影评欺骗，来掀翻这烂片横行的世道
						</p>
						<p class="publicNews-info">
							<span>梁风</span>
							<span>&ensp;·&ensp;</span>
							<span>32分钟前</span>
							<span>&ensp;·&ensp;</span>
							<span>今日头条</span>
						</p>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<p class="publicNews-tt">
							如果你也厌烦被影评欺骗，来掀翻这烂片横行的世道
						</p>
						<p class="publicNews-info">
							<span>梁风</span>
							<span>&ensp;·&ensp;</span>
							<span>32分钟前</span>
							<span>&ensp;·&ensp;</span>
							<span>今日头条</span>
						</p>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<p class="publicNews-tt">
							如果你也厌烦被影评欺骗，来掀翻这烂片横行的世道
						</p>
						<p class="publicNews-info">
							<span>梁风</span>
							<span>&ensp;·&ensp;</span>
							<span>32分钟前</span>
							<span>&ensp;·&ensp;</span>
							<span>今日头条</span>
						</p>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {

			}
		}
	}
</script>