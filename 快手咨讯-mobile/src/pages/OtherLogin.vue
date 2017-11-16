<style lang="less" scoped>
	.other-login{
		width: 100%;
		min-height: .1rem;
		background:url("../../static/images/login_img_top_bg.png") top left no-repeat;
		background-size: 100% auto;
		text-align: left;
		.other-login-h4{
			font-size: .24rem;
			color: #303030;
			line-height: .36rem;
			padding: .8rem 0 .6rem 0;
			padding-left: .3rem;
			font-weight: bold;
			overflow: hidden;
			&>span{
				color: #FF8000;
			}
		}
	}
	.other-login-main{
		width: 100%;
		padding-top: .56rem;
		.login-pay{
			width: 2.46rem;
			height: .42rem;
			margin: 0 auto;

			&>a{
				float: left;
				width: .42rem;
				height: .42rem;
				margin-right: .6rem;
				&>img{
					width: 100%;
					height: 100%;
					display: block;
				}
				&:last-of-type{
					margin-right: 0;
				}
			}
		}
	}
	.prev-login{
		width: 100%;
		display: block;
		height: .14rem;
		line-height: .14rem;
		text-align: center;
		font-size: .14rem;
		color: #FF8000;
		margin-top: 1.2rem;
		&>em{
			width: .06rem;
			height: .1rem;
			background:url("../../static/images/login_btn_other_back_nromal.png") top left no-repeat;
			background-size: 100% auto;
			display: inline-block;
		}
	}
</style>




<template>	
  <div class="other-login"  v-title data-title="其他登陆">
  	<p class="other-login-h4">我们不制造新闻，<br/>我们只是&ensp;<span>新闻的搬运工</span>。</p>
	<div class="other-login-main">
		<div class="login-pay">
			<a href="javascript:;">
				<img src="../../static/images/login_btn_qq_nromal.png" alt="">
			</a>

			<a href="javascript:;">
				<img src="../../static/images/login_btn_wechat_nromal.png" alt="">
			</a>

			<a href="javascript:;">
				<img src="../../static/images/login_btn_sina_nromal.png" alt="">
			</a>
		</div>
		<router-link to="loginIn" class="prev-login">
			<em class="prev-step"></em>
			手机号码登录
	 	</router-link>
	</div>
	<home-footer/>
  </div>
</template>


<script>
	import HomeFooter from '@/components/Footer'
	export default{

		data(){
			return{

			}
		},
		components:{
			HomeFooter
		}	
	}
</script>
