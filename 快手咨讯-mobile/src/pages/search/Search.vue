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
			background-size: 100% auto;
		}
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
	.search-list li{
		height: .5rem;
		line-height: .5rem;
		&>a{
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
	}
</style>




<template>	
  <div class="Search">
  	<div class="searchBox">
  		<em></em>
  		<input type="text" placeholder="请输入要搜索的关键字">
  		<button @click="goback">取消</button>
  	</div>
  	<div class="search-main">
	  	<ul class="search-list"> 
	  		<li>
	  			<router-link to="/Search/SearchDetails">
		  			<em></em>
		  			<span>快手为什么这么厉害？</span>	
	  			</router-link>
	  		</li>
	  		<li>
	  			<router-link to="/Search/SearchDetails">
		  			<em></em>
		  			<span>快手为什么这么厉害？</span>	
	  			</router-link>
	  		</li>
	  	</ul>
	  	<p class="clear-search">
	  		<button>清除历史搜索</button>
	  	</p>
	  	<router-view></router-view>  
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
		    goback () {
		      this.$router.goBack()
		    }
		},
		beforeDestroy(){
		}
	}
</script>
