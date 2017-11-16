<style lang="less" scoped>
	.baseBorderRadius(@radius) {
	  border-radius: @radius;
	  -webkit-border-radius: @radius;
	  -o-border-radius: @radius;
	  -moz-border-radius: @radius;
	  -ms-border-radius: @radius;
	}
	.auto {
	  position: absolute;
	  top: 0;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  margin: auto;
	}
	.Advertising{
		width: 100%;
		background:url("../../static/images/login_img_top_bg.png") top left no-repeat;
		background-size: 100% auto;
		overflow: hidden;
		text-align: left;
		.Advertising-h4{
			font-size: .24rem;
			color: #303030;
			height: .72rem;
			line-height: .36rem;
			margin: .8rem 0;
			padding-left: .3rem;
			font-weight: bold;
			&>span{
				color: #FF8000;
			}
		}
		.Advertising-address,
		.Advertising-email{
			font-size: .14rem;
			color: #303030;
			padding-left: .3rem;
		}
		.Advertising-address{
			margin-top: .14rem;
		}
		.confirm-btn{
			display: block;
			height: .44rem;
			width: 3.3rem;
			background-image: -webkit-linear-gradient(bottom, #FF8000 0%, #FF9600 100%);
			background-image: -o-linear-gradient(bottom, #FF8000 0%, #FF9600 100%);
			background-image: linear-gradient(to top, #FF8000 0%, #FF9600 100%);
			.baseBorderRadius(.3rem);
			color: #fff;
			font-size: .15rem;
			margin: 2.8rem auto 0 auto;
		}
	}
</style>

<template>	
  <div class="Advertising">
  	<go-back/>
  	<p class="Advertising-h4">我们不制造新闻，<br/>我们只是&ensp;<span>新闻的搬运工</span>。</p>
  	<p class="Advertising-email">news@kuaoshou.com</p>
  	<p class="Advertising-address">北京市海淀区中关村东路1号院8号楼20层B2201</p>
  	<router-link to="/Personal" class="confirm-btn" tag="button">确定</router-link>
  </div>
</template>

<script>
	import GoBack from '@/components/GoBack';
	export default{
		data(){
			return{

			}
		},
		components:{
			GoBack
		}
	}
</script>
