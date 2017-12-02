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
			text-shadow: .01rem .01rem 0rem #000;
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
		margin-bottom: 1rem;
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
		word-break: break-all;
	}
	.publicNews-info{
		margin-top: .1rem;
		font-size: .1rem;
		color: #A0A0A0;
	}
</style>
<style lang="less">
	.banner .jqthumb,
	.banner .jqthumb > div
	{
		webkit-border-radius: 0;
	    -moz-border-radius: 0;
	    -ms-border-radius: 0;
	    -o-border-radius: 0;
	    border-radius: 0;
	}
</style>
<template>
	<div class="author-details" v-if="authorInfo.username">
		<div class="banner">
			<img :src="basePath + authorInfo.head_pic" alt="">
			<div class="author-info">
				<p class="author-name">
					<span>{{authorInfo.username}}</span>
					<span>战地小记者</span>
				</p>
				<p class="author-comment">
					请大家关注文娱口和教育，合作微信：wxid_9415034150212战地小记者，带你看世界
				</p>
			</div>

		</div>

		<div class="author-publicNews">
			<p class="publicNews-num">
				共发表&ensp;<span>{{authorInfo.count}}</span>&ensp;篇
			</p>
			<ul class="publicNews-main">
				<li v-for="(item, index) in authorDetail">
					<router-link :to="{ path: '/NewsDetails', query: { newsid: item.news_id }}" >
						<p class="publicNews-tt">
							{{item.title | subStrText(40)}}
						</p>
						<p class="publicNews-info">
							<span>{{item.admin_id}}</span>
							<span>&ensp;·&ensp;</span>
							<span :data-timeago= "parseInt(item.ctime+'000')|formatDate" class="a_public_time"></span>
							<span>&ensp;·&ensp;</span>
							<span>{{item.source}}</span>
						</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import { Indicator } from 'mint-ui';
	export default{
		data(){
			return {
				basePath : this.GLOBAL.__PUBLIC__,
				authorInfo : {},
				authorDetail : []
			}
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
		     	url: $this.GLOBAL.URL + "index.php/News/author_detail",
		     	data:{
		     		news_id : $this.$route.query.newsid
		     	},
		     	type:"post", 
		     	dataType: "json",
		     	success:function(data){
		     		if(data.errno == "0"){
		     			Indicator.close();
		     			$this.authorInfo = data.data.admin_detail;
		     			$this.authorDetail = data.data.news_list;
		     		
						$(function(){
							$this.GLOBAL.agoTime.render(document.querySelectorAll('.a_public_time'), 'zh_CN');
							$(".banner img").jqthumb({
								"width" : $(".banner img").width(),
								"height" : $(".banner img").height()
							})
							$(window).scrollTop(0);
						})
		     		} else {
		     		}
		     	}
		    });
		}
	}
</script>