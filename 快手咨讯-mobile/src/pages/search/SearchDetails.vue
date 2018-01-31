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
	.search-response{
		font-size: .14rem;
		color: #FF8000;
		text-align: left;
		padding-left: .5rem;
		position: relative;
		&:before{
			content: "";
			display: block;
			width: .3rem;
			height: .24rem;
			background: url("../../../static/images/general_btn_search_normal.png") center no-repeat;
			background-size: 100% auto;	
			position: absolute;
			top: 0;
			bottom: 0;
			margin: auto 0;
			left: .14rem;
		}
	}
	.response-tt
	{
		font-size: .12rem;
		color: #a9a9a9;
		height: .5rem;
		line-height: .44rem;
		text-align: left;
		padding-left: .15rem;
	}
	.response-tt{
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
			height: .38rem;
			line-height: .22rem;
		   	display: -webkit-box;
		    display: -moz-box;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    word-break: break-all;
		    -webkit-box-orient: vertical;
		    -webkit-line-clamp:2;
		}
	}
	.news-author-info{
		color: #a8a8a8;
		font-size: .12rem;
		text-align: left;
		margin-top: .07rem;
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
	.noStyle{
		font-size: .14rem;
		color: #FF8000;
		display: none;
	}
</style>




<template>
  <div class="SearchDetails">
  	<div class="searchBox">
  		<em></em>
  		<input type="text" placeholder="请输入要搜索的关键字" class="searchText" @input="isShowMsgFn($event)" v-model="message">
  		<button @click="clearSearch"></button>
  	</div>

  	<p @click = "getSearchText()" v-if="isSearchMsg === true" class="search-response">{{message}}</p>

	<div class="search-details">

		<div class="search-responseBOX"
			 v-for="(item, index) in newsDetails"
			 v-if="item.newsResponse.length"
		>
			<p class="response-tt">{{item.info}}</p>
			<ul class="newsList">
				<li	v-for="(list, indexIn) in item.newsResponse">
					<router-link :to="{ path: '/NewsDetails', query: { newsid: list.news_id }}" href="javascript:;">
						<div class="newsLt">
							<p class="news-tt">{{list.title}}</p>
							<p class="news-author-info">
								<span class="author-name">{{list.admin_id}}</span>
								<span>&ensp;·&ensp;</span>
								<span class="public-time" :data-timeago="parseInt(list.ctime+'000') | formatDate"></span>
								<span>&ensp;·&ensp;</span>
								<span class="news-source">{{list.source}}</span>
							</p>
						</div>
						<div class="newsRt">
							<img v-lazy="basePath + list.cover_img" alt="">
						</div>
					</router-link>
				</li>

			</ul>
		</div>
		<p class="noStyle">没有搜到结果,换个试试~</p>
	</div>
  </div>
</template>


<script>
	import { Indicator } from 'mint-ui';
	export default{
		data(){
			return{
				basePath : this.GLOBAL.__PUBLIC__,
				message : "",
				isSearchMsg : false,
				newsDetails : [
					{
						info : "最新",
						newsResponse : []
					},
					{
						info : "历史相关",
						newsResponse : []
					}
				]
			}
		},
		components:{
		},
		mounted(){
			this.getSearchText();
		},
		methods :{
			clearSearch(){
				this.isSearchMsg = false;
				$(function(){
					$(".searchBox input").val("");
				})
			},
		    isShowMsgFn(e){
		    	var $this = this;
				$(".noStyle").hide();
		    	if ($.trim( $(e.target).val() ).length == 0) {
		    		$this.isSearchMsg = false;
		    	} else{
			    	setTimeout(function(){
			    		$this.isSearchMsg = true;
			    	},500);
		    	}
		    },
			getSearchText(){
	            Indicator.open({
	              text: '加载中...',
	              spinnerType: 'fading-circle'
	            });
				var $this = this;
				$this.isSearchMsg = false;
				$this.newsDetails[0].newsResponse = [];
				$this.newsDetails[1].newsResponse = [];
				var searchInfo = $(".searchText").val().length == 0 ? $this.$route.query.q : $(".searchText").val();

			    $.ajax({
	     		 	xhrFields: {
	                      withCredentials: true
	                },//跨域 后端存储session时，cookie不能用，发送此凭据
			     	url: $this.GLOBAL.URL + "index.php/News/news_search",
			     	type:"post",
			     	dataType: "json",
			     	data:{
			     		search: searchInfo,
			     		page: "1",
			     		showNum : "6"
			     	},
			     	success:function(data){
			     		if(data.errno == 0){
			     			if(data.data.length == 0){
			     				$(".noStyle").show();
			     				Indicator.close();
			     				return;
			     			} else {
			     				$(".noStyle").hide();
			     			}
			     			var date = new Date().getTime();
			     			var dataTime = date - 1 * 60 * 60 * 1000;//最新
			     			$.each(data.data,function(i , j){
		     					j.ctime * 1000 >= dataTime ?
		     					   $this.newsDetails[0].newsResponse.push(j) :
		     					   $this.newsDetails[1].newsResponse.push(j)
			     			});
			     			window.localStorage.searchRecord += searchInfo +  "---";
							$(function(){
								$this.GLOBAL.agoTime.render(document.querySelectorAll('.public-time'), 'zh_CN');
							});
							Indicator.close();
			     		} else if(data.errno == 1){
			     		} else if(data.errno == 2){
			     		}
			     	}
			    });
			}
		},
		watch:{
		},
		beforeDestroy(){
		}
	}
</script>
