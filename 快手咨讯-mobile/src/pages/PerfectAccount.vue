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
	.perfect-account{
		width: 100%;
		background:url("../../static/images/login_img_top_bg.png") top left no-repeat;
		background-size: 100% auto;
		.perfect-tt{
			font-size: .24rem;
			color: #303030;
			width: 100%;
			line-height: .36rem;
			text-align: left;
			padding-left: .3rem;
			height: 2.12rem;
			line-height: 2.12rem;
		}
	}
	.perfect-main{
		font-size: .14rem;
		padding: 0 .3rem;
		color: #303030;
		.userHead,.userName{
			width: 100%;
			height: .51rem;
			overflow: hidden;
			border-bottom: 1px #e5e5e5 solid;
			
			&>span{
				float: left;
				height: 100%;
				line-height: .5rem;
			}
			.userHead-img{
				float: right;
				width: .36rem;
				height: .36rem;
				.baseBorderRadius(.36rem);
				position: relative;
				margin-top: .07rem;
				img, input[type='file']{
					width: .36rem;
					height: .36rem;
					.baseBorderRadius(.36rem);
				}
				input[type='file']{
					position: absolute;
					left: 0;
					top: 0;
					font-size: 0;
					opacity: 0
				}
			}
			.userName-input{
				float: right;
				height: .5rem;
				width: 70%;
				text-align: right;
			}
		}
		.confirm-perfect{
			width: 100%;
			&>button{
				display: block;
				height: .44rem;
				width: 100%;
				background: #F4F4F4;
				.baseBorderRadius(.3rem);
				color: #fff;
				font-size: .15rem;
				margin-top: .4rem;
				&.bgStyle{
					background-image: -webkit-linear-gradient(bottom, #FF8000 0%, #FF9600 100%);
					background-image: -o-linear-gradient(bottom, #FF8000 0%, #FF9600 100%);
					background-image: linear-gradient(to top, #FF8000 0%, #FF9600 100%);
				}
			}

		}
		.userNameInput-hint{
			margin-top: .4rem;
			color: #FF5050;
			font-size: .12rem;
		}
	}
</style>

<template>	
  <div class="perfect-account">
	<go-back/>
  	<h4 class="perfect-tt">完善账号</h4>
	<div class="perfect-main">
		<div class="userHead">
			<span>用户头像</span>
			<div class="userHead-img">
				<img src="../../static/images/edit_img_head_default.png" alt="">
				<input type="file" class="userHead-file" @change="uploadHeadImg($event)">	
			</div>
		</div>

		<div class="userName">
			<span>用户昵称</span>
			<input type="text" class="userName-input" placeholder="请输入昵称，最多七个字符" v-on:input="perfectAccount_val($event)">
		</div>
		<div class="confirm-perfect">
			<button @click="perfectAccount($event)" class="confirmButton" disabled>提交</button>
		</div>
		<p class="userNameInput-hint" v-if="vLength">用户昵称超出字符范围</p>
	</div>
  </div>
</template>

<script>
	import GoBack from '@/components/GoBack';
	export default{
		data(){
			return{
		    	vLength : false
			}
		},
		mounted(){
		},

		components:{
			GoBack
		},
		methods: {
			perfectAccount_val : function(e){
				var val = $(e.target).val();
				if(val != ""){
					$(".perfect-account .confirmButton").addClass('bgStyle').prop("disabled", false);
					if(val.length > 7 ){
						this.vLength = true;
						$(".perfect-account .confirmButton").removeClass("bgStyle").prop("disabled", true);
						$('.perfect-account .userName').css("border-color","#FF4646");
					} else {
						$('.perfect-account .userName').css("border-color","#E6E6E6");
						this.vLength = false;
					}
				} else {
					$(".perfect-account .confirmButton").removeClass("bgStyle").prop("disabled", true);

				}
			},

			perfectAccount : function(e){
			    var nickname = $(".perfect-account .userName-input").val();
			    var head_pic = $(".perfect-account .userHead-img img").attr("src");
			    var $this = this;
			    $.ajax({
	     		 	xhrFields: {
	                      withCredentials: true
	                },//跨域 后端存储session时，cookie不能用，发送此凭据
			     	url: $this.GLOBAL.URL + "index.php/login/perfect_datum",
			     	type:"post", 
			     	dataType:"json",
			     	data:{
			     		"head_pic" : head_pic,
			     		"nickname" : nickname
			     	},
			     	success:function(data){
			     		if(data.errno == 0){
			     			$this.saveLoginInfo(data);
			     		} else {
			     			alert(data.errno + data.errmsg);
			     		}
			     	}
			    })
			},
			saveLoginInfo : function(data){
				window.localStorage.IsLoginIn = 'true';
				window.localStorage.user_head = data.data.head_pic;
				window.localStorage.user_nickName = data.data.nickname;
				data.data.sign == "" ? 
				window.localStorage.user_sign = "暂无个人简介" : 
				window.localStorage.user_sign = data.data.sign;
				this.$router.push({'path': '/Personal'});
			},
			uploadHeadImg : function(e){
		        var fil = $(e.target)[0].files;
			      for (var i = 0; i < fil.length; i++) {
			        reads(fil[i]);
			      }
				  function reads(fil) {
				    var reader = new FileReader();
				    reader.readAsDataURL(fil);
				    reader.onload = function() {
				        $('.userHead-img img')
				        .prop("src", reader.result);
				    };

				  }
			}
		}
	}
</script>
