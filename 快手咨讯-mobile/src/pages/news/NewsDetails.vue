<style lang="less" scoped>
	.baseBorderRadius(@radius) {
	  border-radius: @radius;
	  -webkit-border-radius: @radius;
	  -o-border-radius: @radius;
	  -moz-border-radius: @radius;
	  -ms-border-radius: @radius;
	}
	.comment-fixed{
		height: .5rem;
		line-height: .5rem;
		font-size: .15rem;
		text-align: center;
		color: #979797;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: #fff;
		z-index: 4;
		display: none;
		span{
			width: 2.52rem;
			overflow: hidden;
			text-overflow:ellipsis;
			white-space: nowrap;
			height: .5rem;
			line-height: .5rem;
			display: block;
			margin: 0 auto;
		}
	}
	.news-details{
		padding: 0 .15rem;
		text-align: left;
		padding-top: .6rem;

	}
    .news-tt{
    	font-size: .2rem;
    	color: #303030;
    	font-weight: bold;
    	
    }
    .news-info{
		font-size: .1rem;
		color: #A0A0A0;
		margin-top: .1rem;
    }
    em.split-line{
    	height: .04rem;
    	width: 1.1rem;
    	background: #FF8000;
    	display: block;
    	margin: .4rem 0;
    }
    p.news-main{
    	font-size: .14rem;
    	color: #414141;
    	letter-spacing: .01rem;
    	line-height: .28rem;
    }
    .author-tell{
		font-size: .1rem;
		color: #C7C7C7;
		height: .36rem;
		line-height: .18rem;
		letter-spacing: -.015rem;
		margin: .3rem 0;
    }
    .author-home{
    	border-bottom: 1px solid rgba(48,48,48,0.10);
    	height: .7rem;
    	.lt-info{
    		img{
    			float: left;
    			width: .4rem;
    			height: .4rem;
    			.baseBorderRadius(.4rem);
    		}
    	}
    	.lt-text{
    		float: left;
    		height: .4rem;
    		width: 50%;
    		margin-left: .15rem;
    		p{
    			height: .2rem;
    			&:nth-of-type(1){
					span{
						float: left;
						&:nth-of-type(1){
							color: #000;
							font-size: .14rem;
						}
						&:nth-of-type(2){
							color: #D9D9D9;
							font-size: .14rem;
						}
						&:nth-of-type(3){
							color: #FF8000;
							font-size: .12rem;
						}
					}
    			}
    			&:nth-of-type(2){
					font-size: .12rem;
					color: #8a8a8a;
					span{
						color: #848484;
					}
    			}
    		}
    	}
    	.goToHome{
    		float: right;
    		background: transparent;
    		height: .4rem;
    		line-height: .4rem;
    		color: #8F8F8F;
    		em{
    			width: .1rem;
    			height: .1rem;
    			display: inline-block;
    			background: url("../../../static/images/login_btn_other_inter_nromal.png") center no-repeat;
    			background-size: 100% auto;
    		}
    	}
    }
    .user-comment-main{

    }
    .user-comment-tt{
    	color: #727272;
    	font-size: .14rem;
    	height: .8rem;
    	line-height: .8rem;
    	span{
    		&:nth-of-type(1){
				color: #303030;
    		}
    		&:nth-of-type(2){
    			color: #ff8000;
    		}
			&:nth-of-type(3){}
    	}
    }
    .user-comment-List{
    	li{
			overflow: hidden;
    		margin-bottom: .4rem;
			&>div{
				float: left;
			}
    	}
    	.user-head{
    		width: .4rem;
    		height: .4rem;
    		.baseBorderRadius(.4rem);
    		float: left;
    		margin-right: .15rem;
    		img{
    			display: block;
	    		width: .4rem;
	    		height: .4rem;
	    		.baseBorderRadius(.4rem);
    		}
    	}
    	.user-info{
    		float: left;
    		width: 2.75rem;;
    		p{
    			&:nth-of-type(1){
	    			height: .2rem;
	    			line-height: .2rem;
	    			span{
	    				float: left;
	    				&:nth-of-type(2){
	    					float: right;
	    				}
	    			}
    			}

    		}
    	}
    	.user-name{
    		font-size: .14rem;
    		color: #303030;
    		font-weight: bold;
    	}
    	.user-comment{
    		color: #5F5F5F;
    		font-size: .12rem;
    		text-align: justify;
    	}
    	.user-comment-time{
    		color: #B0B0B0;
    		font-size: .12rem;
    	}
    }
    .comment-inputBox{
    	width: 100%;
	    background-image: -webkit-linear-gradient(rgba(255,255,255,0.00) 0%, #FFFFFF 55%);
	    background-image: -o-linear-gradient(rgba(255,255,255,0.00) 0%, #FFFFFF 55%);
	    background-image: linear-gradient(rgba(255,255,255,0.00) 0%, #FFFFFF 55%); 
	   	padding-top: .6rem;
	   	padding-bottom: .16rem;
	   	overflow: hidden;
	    em{
	    	float: left;
	    }
	    em,img{
	    	display: block;
	    	width: .24rem;
	    	height: .24rem;
	    	.baseBorderRadius(.24rem);
	   }
	   textarea{
			width: 2.58rem;
			height: .24rem;
			line-height: .24rem;
			float: left;
			border: 0;
			resize: none;
			padding-left: .15rem;
			&:focus{
				outline: 0;
			}
	   }
	   button{
	   		width: .48rem;
	   		height: .14rem;
	   		line-height: .16rem;
			color: #c9c9c9;
			border-left: 1px solid #c9c9c9;
			background: transparent;
			float: right;
			margin-top: .05rem;
	   }
    }
</style>
<template>
	<div class="news-details">
		<p class="comment-fixed">
			<span>请大家关注文娱口和教育，合作微信：wxid_9415034150212战地小记者，带你看世界</span>
		</p>
		<p class="news-tt">
			帮用户打发线下的闲暇时间，「共享娱乐」要做基于泛娱乐场景的时间技能共享平台
		</p>
		<p class="news-info">
			<span>梁风</span>
			<span>&ensp;·&ensp;</span>
			<span>32分钟前</span>
			<span>&ensp;·&ensp;</span>
			<span>今日头条</span>
		</p>
		<em class="split-line"></em>
		<p class="news-main">
			继共享单车、共享空间、共享按摩椅等物权类共享产品后，共享经济市场又涌现出一批共享人时间和技能的平台。当时间与技能的共陌生人线下社交产生交集时，就诞生出一批例如万事屋、租我吧、HI区的社交平台。最近36氪接触到的一家平台“共享娱乐”也属于类，基于泛娱乐场景，通过共享用户碎片化时间，对接实现每个人的娱乐技能和共享价值。在该平台上，发布者需明确娱乐项目、时间、地点以及互动的奖励。是否奖励、奖励多少由用户自主
			继共享单车、共享空间、共享按摩椅等物权类共享产品后，共享经济市场又涌现出一批共享人时间和技能的平台。当时间与技能的共陌生人线下社交产生交集时，就诞生出一批例如万事屋、租我吧、HI区的社交平台。最近36氪接触到的一家平台“共享娱乐”也属于类，基于泛娱乐场景，通过共享用户碎片化时间，对接实现每个人的娱乐技能和共享价值。在该平台上，发布者需明确娱乐项目、时间、地点以及互动的奖励。是否奖励、奖励多少由用户自主
						
		</p>
		<p class="author-tell">
			原创文章，作者：毕果。转载或内容合作联系zhuanzai@kuainewskr.com；违规转载法律必究。寻求报道请加微信：kuainews。
		</p>
		<div class="news-allComment">
			<div class="author-home">
				<div class="lt-info">
					<img src="../../../static/images/edit_img_head_default.png" alt="">
					<div class="lt-text">
						<p>
							<span>梁封</span>
							<span>&ensp;·&ensp;</span>
							<span>战地小记者</span>
						</p>
						<p>
							共发表&ensp;<span>109</span>&ensp;篇
						</p>
					</div>
				</div>	
				<button class="goToHome">
					去主页
					<em></em>
				</button>
			</div>
			
			<div class="user-comment-main">
				<p class="user-comment-tt">
					<span>精彩评论</span>
					<span>&nbsp;/&nbsp;</span>
					<span>2017</span>条评论
				</p>
				<ul class="user-comment-List">
					<li>
						<div class="user-head">
							<img src="../../../static/images/edit_img_head_default.png" alt="">
						</div>
						<div class="user-info">
							<p>
								<span class="user-name">网易新闻老油条</span>
								<span class="user-comment-time">57分钟前</span>
							</p>
							<p class="user-comment">智能时代啊…我爱我的祖国，我爱我党！智能时代啊…我爱我的祖国，我爱我党！</p>
						</div>
					</li>
					<li>
						<div class="user-head">
							<img src="../../../static/images/edit_img_head_default.png" alt="">
						</div>
						<div class="user-info">
							<p>
								<span class="user-name">网易新闻老油条</span>
								<span class="user-comment-time">57分钟前</span>
							</p>
							<p class="user-comment">智能时代啊…我爱我的祖国，我爱我党！智能时代啊…我爱我的祖国，我爱我党！</p>
						</div>
					</li>
					<li>
						<div class="user-head">
							<img src="../../../static/images/edit_img_head_default.png" alt="">
						</div>
						<div class="user-info">
							<p>
								<span class="user-name">网易新闻老油条</span>
								<span class="user-comment-time">57分钟前</span>
							</p>
							<p class="user-comment">智能时代啊…我爱我的祖国，我爱我党！智能时代啊…我爱我的祖国，我爱我党！</p>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<div class="comment-inputBox">
			<em>
				<img src="../../../static/images/edit_img_head_default.png" alt="">
			</em>
			<textarea placeholder="说出自己的看法..."></textarea>
			<button>发送</button>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				textAreaFoucus : false
			}
		},
		mounted(){
			var h = $(window).height();
			$(window).resize(function(){
				 if( $(window).height() < h ){
				 	$(".user-comment-main").hide();
				 	$(".comment-inputBox").css("padding", ".16rem 0 .16rem 0");
				 } else {
				   	$(".user-comment-main").show();	
				   	$(".comment-inputBox").css("padding", ".6rem 0 .16rem 0");
				 }
				
				 
			});

			$(window).scroll(function(){
				if( $(window).scrollTop() > $(".news-tt").offset().top){
					$(".comment-fixed").show();	
				} else {
					$(".comment-fixed").hide();
				}
			})
		},
		methods:{
			textArea : function(){

			}
		}
	}
</script>