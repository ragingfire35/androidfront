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
    	word-break: break-all;
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
    div.news-main{
    	width: 100%;
    	font-size: .14rem;
    	color: #414141;
    	letter-spacing: .01rem;
    	line-height: .28rem;
    	word-break: break-all;
    	text-align: justify;
    	img{
    		width: 100%;
    	}
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
    			border: 1px solid #ccc;
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
    .more-comment{
    	width: 100%;
    	height: .24rem;
    	line-height: .24rem;
    	margin-bottom: 1rem;
    	&>button{
			background: transparent;
			color: #FF8000;
			display: block;
			margin: 0 auto;
    		&>span{
				
    		}
    	}
    }
    .news-details-top{
    	width: 100%;
    	height: .5rem;
    	background: #fff;
    	position: fixed;
    	z-index: 1;
    	top: 0;
    	left: 0;
    }

</style>
<style lang="less">
	@import '../../../static/css/plugIn/smohan.face.css';
    .comment-inputBox{
    	width: 100%;
    	height: 1rem;
 	    background-image: -webkit-linear-gradient(rgba(255,255,255,0.00) 0%, #FFFFFF 55%);
		background-image: -o-linear-gradient(rgba(255,255,255,0.00) 0%, #FFFFFF 55%);
		background-image: linear-gradient(rgba(255,255,255,0.00) 0%, #FFFFFF 55%);
		position: fixed;
	   	left: 0;
	   	z-index: 10000;
	   	.comment-inputInner{
	   		width: 100%;
	   		height: .24rem;
	   		position: absolute;	
	   		left: 0;
	   		right: 0;
	   		margin: 0 auto;
	   		bottom: .15rem;
	   		left: .25rem;
	   		&>em{
				float: left;
	   		}
	   		&>em>img{
				border: 1px solid #ccc;
				display: block;
	   		}
	   		&>em,&>em>img{
		    	width: .24rem;
		    	height: .24rem;
				border-radius: .24rem;
				-webkit-border-radius: .24rem;
				-o-border-radius: .24rem;
				-moz-border-radius: .24rem;
				-ms-border-radius: .24rem;
	   		}
	   	}
    }
    #Smohan_FaceBox{
   	   float: left;
   	   width: 3rem!important;
	   #Smohan_text{
			width: 2.2rem;
			height: .24rem;
			overflow-y: auto;
			line-height: .24rem;
			float: left;
			border: 0;
			resize: none;
			padding-left: .15rem;
			font-size: .14rem;
			z-index: 10000;
			&:empty:before{
		        content: attr(placeholder);
		        display: block;
		        line-height: .24rem;
		        color: #999;
			}
			&:focus{
				outline: 0;
			}
	   }
	   .faceBox{
	   		width: .25rem;
	   		height: .25rem;
	   		float: left;
	   		padding-top: 0;
	   		.face{
		   		width: .25rem;
		   		height: .25rem;
		   		margin-top: -.03rem;
		   		cursor: pointer;
	   		}
	   }
	   &>button{
	   		width: .48rem;
	   		height: .14rem;
	   		line-height: .14rem;
			color: #c9c9c9;
			border-left: 1px solid #c9c9c9;
			background: transparent;
			float: right;
			margin-top: .05rem;
	   }
    }
    #SmohanFaceBox{
    	width: 100%;
    	top: -2.4rem;
    	left: -.78rem;
    	right: 0;
    	margin: 0 auto;
    	padding: .1rem;
    	.Corner{
    		-transform: rotate(180deg);
    		-webkit-transform : rotate(180deg);
    		bottom: -.62rem;
		    right: .2rem;
		    display: none!important;
    	}
    	.Content{
		    width: 3.2rem;
		    height: auto;
		    margin: 0;
		    overflow: hidden;

		    h3{
		    	width: auto;
		    }
    		li, li a{
    			width: .26rem;
    			height: .26rem;
    			display: block;
    		}
    		li a img{
    			width: .24rem;
    			height: .24rem;
    			display: block;
    		}
    	}
    }	
</style>
<style lang="less">
	.news-main{
		img{
			max-width: 100%;
		}
	}
</style>
<template>
	<div class="news-details" v-if="newsDetails.title">
		<div class="news-details-top">
			<go-back/>
		</div>

		<p class="comment-fixed">
			<go-back/>
			<span>{{authorInfo.introduce}}</span>
		</p>
		<p class="news-tt">
			{{newsDetails.title}}
		</p>
		<p class="news-info">
			<span>{{newsDetails.admin_id}}</span>
			<span>&ensp;·&ensp;</span>
			<span :data-timeago="parseInt(newsDetails.ctime+'000')|formatDate" class="news-time"></span>
			<span>&ensp;·&ensp;</span>
			<span>{{newsDetails.source}}</span>
		</p>
		<em class="split-line"></em>
		<div class="news-main" v-html="newsDetails.content"></div>
		<p class="author-tell">
			原创文章，作者：{{authorInfo.username}}。转载或内容合作联系zhuanzai@kuainewskr.com；违规转载法律必究。寻求报道请加微信：kuainews。
		</p>
		<div class="news-allComment">
			<div class="author-home" :v-if="authorInfo.length">
				<div class="lt-info">
					<img v-lazy="basePath + authorInfo.head_pic" alt="">
					<div class="lt-text">
						<p>
							<span>{{authorInfo.username}}</span>
							<span>&ensp;·&ensp;</span>
							<span>战地小记者</span>
						</p>
						<p>
							共发表&ensp;<span>{{authorInfo.count}}</span>&ensp;篇
						</p>
					</div>
				</div>
				<router-link :to="{ path: '/AuthorDetails', query: { newsid: $route.query.newsid }}"  tag="button" class="goToHome">
					去主页
					<em></em>
				</router-link>
			</div>
			
			<div class="user-comment-main">
				<p class="user-comment-tt">
					<span>精彩评论</span>
					<span>&nbsp;/&nbsp;</span>
					<span>{{commentCount}}&nbsp;</span>条评论
				</p>
				<ul 
					class="user-comment-List"
					v-infinite-scroll="loadMore"
					infinite-scroll-disabled="loading"
					infinite-scroll-distance="10"
				>
					<li v-for="item, index in commentArr">
						<div class="user-head">
							<img :src="item.head_pic" alt="">
						</div>
						<div class="user-info">
							<p>
								<span class="user-name">{{item.nickname}}</span>
								<span class="user-comment-time" :data-timeago= "parseInt(item.ctime+'000')|formatDate"></span>
							</p>
							<p class="user-comment" v-html="item.content"></p>
						</div>
					</li>
				</ul>
				<div class="more-comment" style="">
					<button @click="getOriginComment( ++moreCommentBtn )">更多<span>精彩评论</span></button>
				</div>
			</div>
		</div>

		<div class="comment-inputBox">
			<div class="comment-inputInner">
				<em>
					<img v-lazy="userHead" alt="">
				</em>
				<div id="Smohan_FaceBox">
			       <div contenteditable="true" name="text" id="Smohan_text" placeholder="说出自己的看法..." @focus = "inputScrollFn"></div> 
				   <p class="faceBox">
					   <a href="javascript:void(0)" class="face" title="表情"></a>
				   </p>
				   <button @click="sendComment($event)">发送</button>
				</div>
			</div>			
		</div>
	</div>
</template>
<script>
	import { Toast, InfiniteScroll, Indicator } from 'mint-ui';
	import GoBack from '@/components/GoBack';
	//表情插件
	import "../../../static/js/plugIn/smohan.face.js"
	export default{
		data(){
			return {
				basePath : this.GLOBAL.__PUBLIC__,
				textAreaFoucus : false,
				newsDetails : {},
				authorInfo : {},
				commentArr : [],
				userHead : window.localStorage.user_head,
				moreCommentBtn : 1,
				commentCount : ""
			}
		},
		components:{
			GoBack
		},
		watch: {
			newsDetails(){
				var $this = this;
				$(function(){
					$(window).scrollTop(0);
					$this.GLOBAL.agoTime.render(document.querySelectorAll('.news-time'), 'zh_CN');
				})
			},
			commentArr : function(){
				var $this = this;
				$(function(){
					$this.GLOBAL.agoTime.render(document.querySelectorAll('.user-comment-time'), 'zh_CN');
				})
			}
		},
		mounted(){
            Indicator.open({
              text: '加载中...',
              spinnerType: 'fading-circle'
            });
			var h = $(window).height();
			var $this = this;

		    $.ajax({
	 		 	xhrFields: {
	                  withCredentials: true
	            },//跨域 后端存储session时，cookie不能用，发送此凭据
		     	url: $this.GLOBAL.URL + "index.php/News/new_detail",
		     	data:{
		     		news_id : $this.$route.query.newsid
		     	},
		     	type:"post", 
		     	dataType: "json",
		     	success:function(data){
		     		if(data.errno == "0"){
		     			$this.newsDetails = data.data;
		     			$this.author_detail();
		     			$this.getOriginComment($this.moreCommentBtn);
			     		Indicator.close();
						$(function(){				
							$("a.face").smohanfacebox({
								Event : "click",	//触发事件	
								divid : "Smohan_FaceBox", //外层DIV ID
								textid : "Smohan_text" //文本框 ID
							});
							var top =  $(window).height() - $(".comment-inputBox").height();
							$(".comment-inputBox").css("top", top);
						});
		     		} else {
		     			//$(".more-comment").hide();
		     		}
		     	}
		    });
		    $(window).on({
		    	"resize": function(){
					var top =  $(window).height() - $(".comment-inputBox").height();
					$(".comment-inputBox").css("top", top);
			    },
		    	"scroll" : function(){
					if($(".comment-fixed").length != 0 && $(window).scrollTop() > $(".news-tt").offset().top){
						$(".comment-fixed").show();	
					} else {
						$(".comment-fixed").hide();
					}
		    	}

		    });
		},
		methods:{
			inputScrollFn(){
				var top =  $(window).height() - $(".comment-inputBox").height();
				$(".comment-inputBox").css("top", top);
			},

			loadMore() {
			  var $this = this;
			  this.loading = true;
			  setTimeout(() => {
			  	$(".more-comment button").trigger('click');
			    $this.loading = false;
			  }, 300);
			},
			sendComment :function(e){
			 	var textArea = $("#Smohan_text");
			    var $this = this;
			    $(e.target).prop("disabled", true);
				if(window.localStorage.IsLoginIn !== 'true'){
					let instance = Toast({
						message : '请先登录',
						position : "bottom"
					});
					$(e.target).prop("disabled", false);
					
					setTimeout(function(){
						$this.$router.push({"path" : "/loginIn"})
					},1000)
					return;
				}
				var commentVal = {
					head_pic : window.localStorage.user_head,
					nickname : window.localStorage.user_nickName,
					content :  $("#Smohan_text").html()
				};
				if(textArea.html() != ""){

				     $.ajax({
			 		 	xhrFields: {
			                  withCredentials: true
			            },//跨域 后端存储session时，cookie不能用，发送此凭据
				     	url: $this.GLOBAL.URL + "index.php/News/add_comment",
				     	data:{
				     		news_id : $this.$route.query.newsid,
				     		content : commentVal.content
				     	},
				     	type:"post", 
				     	dataType: "json",
				     	success:function(data){
				     		$(e.target).prop("disabled", false);
				     		if(data.errno == "0"){
					     		$this.commentArr.unshift(commentVal);
					     		$("#Smohan_text").html("");
								let instance = Toast({
									message : '发送成功',
									position : "bottom"
								});
								setTimeout(() => {
								  instance.close();
								  
								}, 2000);
							 	
				     		} else {
				     			alert(data.errmsg);
				     		}
				     	}
				     });
				} else {
					let instance = Toast({
						message : '输入不能为空',
						position : "bottom"
					});
					setTimeout(() => {
					  instance.close();
					  $(e.target).prop("disabled", false);
					}, 800);

				}
			},
			getOriginComment : function(page, e){
				if(page !== 1){
					var btnHtml = $(".more-comment button").html();
					$(".more-comment button").html("加载中...").prop("disabled", true);
				};
				var $this = this;
			    $.ajax({
		 		 	xhrFields: {
		                  withCredentials: true
		            },//跨域 后端存储session时，cookie不能用，发送此凭据
			     	url: $this.GLOBAL.URL + "index.php/News/get_comment",
			     	data:{
			     		news_id : $this.$route.query.newsid,
			     		showNum : 6,
			     		page : page
			     	},
			     	type:"post", 
			     	dataType: "json",
			     	success:function(data){
			     		if(data.errno == "0"){
			     			$this.commentCount = data.data.count;
			     			if($this.commentArr.length != data.data.count){
			     				$this.commentArr = $this.commentArr.concat(data.data.result);
				     			if(page !== 1){
				     				$(".more-comment button").html(btnHtml).prop("disabled", false);
				     			} else {
									$(".more-comment").show();
				     			}	
			     			} else {
			     				$(".more-comment button").html("已无更多评论。");
			     			}

			     		} else {
			     			alert(data.errmsg);
			     		}
			     	}
			    });
			},
			author_detail : function(){
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
			     			$this.authorInfo = data.data.admin_detail;

			     		} else {
			     		}
			     	}
			    });
			}
		},
		beforeDestroy(){
			$(window).off("scroll resize");
		}
	}
</script>