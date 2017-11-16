<style lang="less" scoped>

	.personal{
		.banner{
			width: 100%;
			height: 2.7rem;
			position: relative;

			img{
				width: 100%;
				height: 100%;
				display: block;
			}
		}
		.personal-info{
			width: 100%;
			height: .9rem;
			padding: 0 .15rem;
			position: absolute;
			bottom: 0;
			left: 0;
			text-align: left;
			.info-main{
				width: 100%;
				height: .28rem;
				line-height: .28rem;
				.personal-info-name{
					font-size: .24rem;
					color: #fff;
					float: left;
					text-shadow: 0 0 2px rgba(0,0,0,0.30);
				}
				em{	
					width: .24rem;
					height: .24rem;
					margin: .02rem 0 0 .1rem;
					float: left;
					background: url("../../static/images/porfilo_btn_edit_normal.png") center no-repeat;
					background-size: 100% auto;
					
				}
			}
			.autograph{
				font-size: .12rem;
				padding-top: .15rem;
				color: #fff;
				letter-spacing: .01rem;
				text-shadow: 0 0 2px rgba(0,0,0,0.30);
			}
		} 
	}
	.domain{
		width: 100%;
		background: #F8F8F8;
		li{
			width: 100%;
			height: .5rem;
			line-height: .5rem;
			background: #fff;
			a{	
				width: 100%;
				display: block;
				overflow: hidden;
				em{
					float: left;
					width: .5rem;
					height: .5rem;
						&.gotoBtn{
							background: url("../../static/images/login_btn_other_inter_nromal.png") center no-repeat;
							background-size: 100% auto;
						}
						&:nth-of-type(2){
							width: .1rem;
							float: right;
							margin-right: .15rem;
						}
				}
				span{
					float: left;
					font-size: .15rem;
					color:#303030;
				}
			}
			&:nth-of-type(1){
				a{
					em{
						&:nth-of-type(1){
							background: url("../../static/images/porfilo_img_list_history.png") center no-repeat;
							background-size: 100% auto;
						}
					}
				}

			}
			&:nth-of-type(2){
				em{
					&:nth-of-type(1){
						background: url("../../static/images/porfilo_img_list_about.png") center no-repeat;
						background-size: 100% auto;
					}
				}
			}
			&:nth-of-type(3){
				margin-top: .1rem;
				em{
					&:nth-of-type(1){
						background: url("../../static/images/porfilo_img_list_quit.png") center no-repeat;
						background-size: 100% auto;
					}

				}
			}
		}
	}

</style>
<style>
	.jqthumb.baseJqthumb, 
	.jqthumb>div.baseJqthumb{
		-webkit-border-radius: 0;
		-moz-border-radius: 0;
		-ms-border-radius: 0;
		-o-border-radius: 0;
		border-radius: 0;
		border: 0;
	} 
</style>
<template>	
  <div class="personal">
  	<div class="banner">
  		<img :src="user_head" alt="">
  		<div class="personal-info">
  			<p class="info-main">
  				<span class="personal-info-name">{{user_nickName}}</span>
  				<router-link to="/EditData" tag="em"></router-link>
  			</p>
  			<p class="autograph">{{user_sign}}</p>
  		</div>
  	</div>
	<ul class="domain">
		<li>
			<router-link to='/LookHistory'>
				<em></em>
				<span>浏览历史</span>
				<em class="gotoBtn"></em>
			</router-link>
		</li>
		<li>
			<router-link to='/AboutUs'>
				<em></em>
				<span>关于我们</span>
				<em class="gotoBtn"></em>
			</router-link>
		</li>
		<li>
			<a @click="quitLogin">
				<em></em>
				<span>退出账号</span>
				<em class="gotoBtn"></em>
			</a>
		</li>
	</ul>
  </div>
</template>

<script>
	export default{
		data(){
			return{
				user_head : window.localStorage.user_head,
				user_nickName : window.localStorage.user_nickName,
				user_sign : window.localStorage.user_sign 
			}
		},
		components:{
			
		},
		mounted(){
			
			$('.banner img').jqthumb({
				width: "100%",
				height: "100%",
				after: function(){
					$(".jqthumb, .jqthumb>div").addClass('baseJqthumb');
				}
			});
		},
		methods: {
			quitLogin : function(){
				var $this = this;
				if( !confirm("确定退出?") ) return;
			    $.ajax({
	     		 	xhrFields: {
	                      withCredentials: true
	                },//跨域 后端存储session时，cookie不能用，发送此凭据
					crossDomain: true,
			     	url: $this.GLOBAL.URL + "index.php/login/Login_out",
			     	type:"post", 
			     	dataType:"json",
			     	success:function(data){
			     		if(data.errno == 0){
							window.localStorage.IsLoginIn = 'false';
							window.localStorage.user_head = './static/images/default.png';
							window.localStorage.user_nickName = '';	
							window.localStorage.user_sign = '咱无个人简介';
							$this.$router.push({"path" : "loginIn"});
			     		}

			     	}
			    })
			}
		},
		beforeDestroy(){
			$(".personal-btn").removeClass('router-link-exact-active selected');
		}
	}
</script>
