<style lang="less" scoped>
	.baseBorderRadius(@radius) {
	  border-radius: @radius;
	  -webkit-border-radius: @radius;
	  -o-border-radius: @radius;
	  -moz-border-radius: @radius;
	  -ms-border-radius: @radius;
	}
	.navBtn-sort{
		padding: 0 .15rem;
	}
	.close-sort{
		width: 100%;
		height: .5rem;
		button{
			width: .5rem;
			height: .5rem;
			float: right;
			margin-right: -.15rem;
			background: url("../../static/images/general_btn_close_normal.png") center no-repeat;
			background-size: 100% auto;
		}
	}
	.btn-sort-tt{
		width: 100%;
		margin-top: .2rem;
		text-align: left;
	}
	.sort-tt-1{
		width: 100%;
		display: block;
		font-size: .2rem;
		color: #303030;
		font-weight: bold;
		line-height: .2rem;
	}
	.sort-tt-2{
		height: .3rem;
		line-height: .3rem;
		width: 100%;
		display: block;
		font-size: .12rem;
		color: #A2A2A2;
		font-weight: bold;
	}
	.btnBox{
		margin-top: .8rem;
		button{
			width: .72rem;
			height: .34rem;
			.baseBorderRadius(.34rem);
			border: 1px solid #E7E7E7;
			background:transparent;
			color: #303030;
			font-size: .14rem;
			margin-left: .14rem;
			float: left;
			margin-bottom: .15rem;
			transition: transform .3s;
			&:nth-of-type(4n-3){
				margin-left: 0;
			}
			&.dragging {
		    	-ms-transform: scale(1.2);
		        transform: scale(1.2);
		        background: #FF8000;
		        color: #fff;
		        border-color: #FF8000;

			}
		}
	}
	.in-out-translate-fade-enter-active, .in-out-translate-fade-leave-active {
	  transition: all .5s;
	}
	.in-out-translate-fade-enter, .in-out-translate-fade-leave-active {
	  opacity: 0;
	}
	.in-out-translate-fade-enter {
	  transform: translate3d(100%, 0, 0);
	}
	.in-out-translate-fade-leave-active {
	  transform: translate3d(-100%, 0, 0);
	}
	.confirm-btn{
		display: block;
		height: .44rem;
		width: 100%;
		background-image: -webkit-linear-gradient(bottom, #FF8000 0%, #FF9600 100%);
		background-image: -o-linear-gradient(bottom, #FF8000 0%, #FF9600 100%);
		background-image: linear-gradient(to top, #FF8000 0%, #FF9600 100%);
		.baseBorderRadius(.3rem);
		color: #fff;
		font-size: .15rem;
		margin: 4.3rem 0 0 0;
	}
</style>



<template>	
  <div class="navBtn-sort">
  	<p class="close-sort">
  		<router-link to='/' tag="button"></router-link>
  	</p>
  	<p class="btn-sort-tt">
  		<span class="sort-tt-1">编辑分类排序</span>
  		<span class="sort-tt-2">长按单个分类可以根据自己的喜好排列分类顺序</span>
  	</p>
  	<div class="btnBox">
  		<button  v-for="item,index in navBtn" v-dragging="{ item: item, list: navBtn, group: 'item'}" :key="item.id" :navBtnId=item.id>{{item.category}}</button>
  	</div>
  	<button class="confirm-btn" @click="btnSortFn($event)" v-if="isBtnLoad">确定</button>
  </div>
</template>


<script>

	export default{

		data(){
			return{
				isBtnLoad : false,
				navBtn: [],
				exitBtn : []
			}
		},
		components:{
		},
		beforeCreate(){

/*			this.$root.eventHub.$on('NavBtnSort', (navBtn)=>{
					 this.navBtn = navBtn;
			});*/
		},
		mounted(){
			var $this = this;
		    $.ajax({
     		 	xhrFields: {
                      withCredentials: true
                },//跨域 后端存储session时，cookie不能用，发送此凭据
		     	url: $this.GLOBAL.URL + "index.php/News/get_category",
		     	type:"post", 
		     	dataType: "json",
		     	success:function(data){
		     		if(data.errno == 0){
		     		   $this.navBtn = data.data;
		     		   $this.isBtnLoad = true;
		     		} else if(data.errno == 1){
		     			alert(data.errmsg);
		     		} else if(data.errno == 2){
		     			alert(data.errmsg);
		     			$this.$router.push({"path" : "/loginIn"});
		     		}
		     	}
		    });
		},
		methods:{
			btnSortFn : function(e){
				var cate_sort = new Array();
				var $this = this;
				$(".btnBox button").each(function(i , j){
					cate_sort.push($(this).attr('navBtnId'));
				});
			    $.ajax({
	     		 	xhrFields: {
	                      withCredentials: true
	                },//跨域 后端存储session时，cookie不能用，发送此凭据
			     	url: $this.GLOBAL.URL + "index.php/News/cate_sort",
			     	type:"post", 
			     	dataType: "json",
			     	data: {
			     		cate_sort : cate_sort
			     	},
			     	success:function(data){
			     		if(data.errno == 0){
			     			$this.$router.push({"path" : "/"});
			     		} else if(data.errno == 1){
			     			alert(data.errmsg);
			     			$this.$router.push({"path" : "/loginIn"});
			     		}
			     	}
			    });
			}
		},
		updated(){
		},//data变化时
		beforeDestroy(){
			
		}
	}
</script>
