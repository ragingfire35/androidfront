<style lang="less" scoped>
	.baseBorderRadius(@radius) {
	  border-radius: @radius;
	  -webkit-border-radius: @radius;
	  -o-border-radius: @radius;
	  -moz-border-radius: @radius;
	  -ms-border-radius: @radius;
	}
	.Search{
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
			background-size: 100% auto;}
		&>input{
			width: 2.86rem;
			height: .3rem;
			background: #F8F8F8;
			.baseBorderRadius(.3rem);
			padding-left: .34rem;
			font-size: .13rem;
			float: left;
			margin-top: .1rem;
		}
		&>button{
			background: transparent;
			color: #FF8000;
			font-size: .14rem;
			float: right;
			height:.5rem;
			line-height: .5rem; 
		}
	}
	.search-text{
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
	.search-list li{
		height: .5rem;
		line-height: .5rem;
		font-size: .14rem;
		color: #777;
		&>em{
			width: .5rem;
			height: .5rem;
			float: left;
			background: url("../../../static/images/porfilo_img_list_history.png") center no-repeat;
			background-size: 100% auto;
			margin-left: .08rem;
		}
		&>span{
			float: left;
			margin-left: -.05rem;
		}
	}
	.clear-search{
		height: .5rem;
		margin:0 .15rem;
		border-top: .01rem solid #EAEAEA;
		margin-top: .1rem;
		&>button{
			height: .5rem;
			line-height: .5rem;
			background: transparent;
			font-size: .14rem;
			color: #FF8000;
			display: block;
			margin: 0 auto;
		}
		&>span{
			display: block;
			margin-top: .1rem;
			font-size: .14rem;
			color: #FF8000;
		}
	}
</style>




<template>	
  <div class="Search">
  	<div class="searchBox">
  		<em></em>
  		<input 
	  		type="text" 
	  		placeholder="请输入要搜索的关键字" 
	  		v-model.number="message" 
	  		@input="isShowMsgFn($event)"
  		>
  		<button @click="clearSearchText">取消</button>
  	</div>
  	<router-link tag="p" :to="{ path:'/Search/SearchDetails',query: {q: message } }" class="search-text" v-if="isSearchMsg" >{{message}}</router-link>
  	<div class="search-main" v-else-if="clearSearch">
	  	<ul class="search-list"> 
	  		<router-link 
	  			v-for="item, index in oldSearchList"
	  			:to="{ path:'/Search/SearchDetails',query: {q: item } }" 
	  			:key="index"
	  			tag="li"
	  			v-if = "item.length"
	  		>
	  			<em></em>
	  			<span>{{item}}</span>
  			</router-link>
	  	</ul>
	  	<p class="clear-search">
	  		<button @click="crShHis(), noSearch = true" v-if="noSearch == false">清除历史搜索</button>
	  		<span v-else>很干净哦~~</span>
	  	</p>
	  	<router-view></router-view>  
  	</div>
  </div>
</template>


<script>
	export default{
		data(){
			return{
				oldSearchList : window.localStorage.searchRecord || [],
				message:"",
				isSearchMsg : false,
				clearSearch : true,
				noSearch : false
			}
		},
		components:{
		},	
		mounted(){
			if(this.oldSearchList.length == 0) {
				this.noSearch = true;
				return;
			} 
			window.localStorage.searchRecord = window.localStorage.searchRecord.replace(/undefined/, "");
			var arr = window.localStorage.searchRecord.split("---").reverse();
			this.oldSearchList = this.unique3( arr );
		},
		watch:{
			clearSearch(val){
				$(function(){
					$(".searchBox input").val("");
				})
				
			}	
		},
		methods :{
			unique3 : function(array){ 
				var n = [array[0]]; //结果数组 
				//从第二项开始遍历 
				for(var i = 1; i < array.length; i++) { 
					if (array.indexOf(array[i]) == i) n.push(array[i]); 				
				}
				return n;
			}, 
 

		    goback () {
		      this.$router.goBack()
		    },
		    isShowMsgFn(e){

		    	var $this = this;
		    	$this.clearSearch = false;
		    	if ($.trim( $(e.target).val() ).length == 0) {
		    		$this.isSearchMsg = false;
		    	} else{
			    	setTimeout(function(){
			    		$this.isSearchMsg = true;
			    	},500);
		    	}
		    },
		    clearSearchText(){		    	
		    	this.isSearchMsg = false;
		    	this.clearSearch = true;
		    },
		    crShHis(){
		    	this.oldSearchList = [];
		    	window.localStorage.removeItem("searchRecord");
		    }
		},
		beforeDestroy(){
		}
	}
</script>
