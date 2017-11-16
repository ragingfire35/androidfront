<style lang="less" scoped>
	.baseBorderRadius(@radius) {
	  border-radius: @radius;
	  -webkit-border-radius: @radius;
	  -o-border-radius: @radius;
	  -moz-border-radius: @radius;
	  -ms-border-radius: @radius;
	}
	.loginIn{
		width: 100%;
		min-height: .1rem;
		background:url("../../static/images/login_img_top_bg.png") top left no-repeat;
		background-size: 100% auto;
		text-align: left;
		.loginIn-h4{
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
		.loginIn-main{
			width: 100%;
			padding: 0 .3rem;
			font-size: .14rem;
			.phoneNum,
			.phoneCode{
				height: .51rem;
				border-bottom: 1px solid #E5E5E5;
				&>input{
					width: 100%;
					height: 100%;
					display: block;
				}
			}
			.phoneCode{
				position: relative;
			}
			.getCode{
				background: transparent;
				color: #FF8000;
				position: absolute;
				top: 0;
				bottom: 0;
				margin: auto 0;
				right: 0;
			}
			.login-btn{
				display: block;
				height: .44rem;
				width: 100%;
				background-image: -webkit-linear-gradient(bottom, #FF8000 0%, #FF9600 100%);
				background-image: -o-linear-gradient(bottom, #FF8000 0%, #FF9600 100%);
				background-image: linear-gradient(to top, #FF8000 0%, #FF9600 100%);
				.baseBorderRadius(.3rem);
				color: #fff;
				font-size: .15rem;
				margin: .4rem 0;
			}
			.other-login{
				width: 100%;
				text-align: center;
				color: #8E8E8E;
				background: transparent;
				&>em{
					width: .06rem;
					height: .1rem;
					background:url("../../static/images/login_btn_other_inter_nromal.png") top left no-repeat;
					background-size: 100% auto;
					display: inline-block;
				}
			}
		}
	}
</style>




<template>	
  <div class="loginIn">
  	<p class="loginIn-h4">我们不制造新闻，<br/>我们只是&ensp;<span>新闻的搬运工</span>。</p>
	<div class="loginIn-main">
		<p class="phoneNum">
			<input type="number" maxlength="11" placeholder="请输入手机号" class="phoneNumber">
		</p>
		<p class="phoneCode">
			<input type="number" maxlength="4" placeholder="请输入验证码" class="phoneCodeVal">
			<button class="getCode" @click="getPhoneCode($event)">获取验证码</button>
		</p>

		<button class="login-btn" @click="loginIn($event)">登录</button>
		<router-link to="/OtherLogin" tag="button" class="other-login">
			第三方登录
			<em></em>
		</router-link>
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
			var h = $(window).height();
			$(window).resize(function(){
				 $(window).height() < h ?
				 $("footer").hide() :
				 $("footer").show();	
			})
			
		},
		methods: {
			isPhone: function(phoneNumber){
				return /^1[3|4|5|7|8][0-9]{9}$/.test(phoneNumber) ? true : false;
			},

			isPhoneCode : function(phoneCodeVal){
				return phoneCodeVal.length == 4 ? true : false;
			},

			countDown : function(e, selector){

				var $this = this
				var time = 2;

			    e.html(time + "s").addClass('countDown-style').prop("disabled", true); 
			    selector.addClass('border-noraml-0').prop("disabled", true);

			    var t =  setInterval(function() {
			    	time--;
			    	e.html(time + "s");

				    if (time == 0) {
				      e.html("再次获取").removeClass("countDown-style").prop("disabled", false);
				      selector.removeClass('border-noraml-0').prop("disabled", false);
				      time = 2;
				      clearInterval(t);
				    }
			    }, 1000)
			},

			getPhoneCode : function(e){
				var phoneNumber =  $(".phoneNumber");
				var phoneVal = phoneNumber.val();
				var $this = this;
				if ($this.isPhone(phoneVal)) {
					 $this.countDown($(e.target), phoneNumber);
				     $.ajax({
		     		 	xhrFields: {
		                      withCredentials: true
		                },//跨域 后端存储session时，cookie不能用，发送此凭据
				     	url: $this.GLOBAL.URL + "index.php/login/sendSMS",
				     	type:"post", 
				     	dataType: "json",
				     	data:{
				     		"phone" : phoneVal
				     	},
				     	success:function(data){

				     		console.log(data);
				     	}
				     })
				} else {
					alert("手机号码不正确");
				}
			},
			loginIn: function(e){
				var phoneVal = $(" .phoneNumber").val();
				var phoneCodeVal = $(".phoneCodeVal").val();
				var $this = this;
				if($this.isPhone(phoneVal) && $this.isPhoneCode(phoneCodeVal)){
					$(e.target).prop("disabled", false).html("登录中...").css("background","#E5E5E5");
				    $.ajax({
		     		 	xhrFields: {
		                      withCredentials: true
		                },//跨域 后端存储session时，cookie不能用，发送此凭据
						crossDomain: true,
				     	url: $this.GLOBAL.URL + "index.php/login/Login",
				     	type:"post", 
				     	dataType:"json",
				     	data:{
				     		"phone" : phoneVal,
				     		"Vcode" : phoneCodeVal
				     	},
				     	success:function(data){
				     		$(e.target).prop("disabled", true).html("登录").css("background","#FF8000");
				     		if(data.errno == 0){				     			
								if(data.data.first_time == 1){
									$this.$router.push({'path': '/PerfectAccount'})
								} else{							
									$this.saveLoginInfo(data);	
								}
								
				     		} else {
				     			alert(data.errmsg);
				     		}
				     	}
				    })

				} else {
					if(!$this.isPhone(phoneVal)){
						alert("手机号输入不正确");
						return;
					}
					if(!$this.isPhoneCode(phoneCodeVal)){
						alert("验证码输入不正确")
					}
				}
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
		},

		beforeDestroy(){
			$(window).off("resize");
			$(".personal-btn").removeClass('router-link-exact-active selected');
		}
	}
</script>
