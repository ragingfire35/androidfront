<style lang="less" scoped>
	.edit-data{
		width: 100%;
		overflow-x: hidden;
	}
	.edit-tt{
		height: .5rem;
		line-height: .5rem;
		position: relative;
		&>span{
			display: block;
			font-size: .15rem;
			color: #303030;
			margin: 0 auto;
		}
		&>button{
			font-size: .14rem;
			color: #FF8000;
			background: transparent;
			position: absolute;
			top: 0;
			bottom: 0;
			margin: auto 0;
			right: .15rem;
		}
	}
	.edit-main{
		padding: 0 .15rem;
		&>p{
			height: .5rem;
			line-height: .5rem;
			margin-bottom: .1rem;
			font-size: .15rem;
			&>span:nth-of-type(1){
				float: left;
			}
		}
	}
	.user-head{
		&>span{
			&:nth-of-type(2){
				width: .54rem;
				height: .36rem;
				float: right;
				margin-top: .07rem;
				position: relative;
				&>img, &>input{
					width: .36rem;
					height: 100%;
					display: block;
				}
				&>input{
					width: .54rem;
					position: absolute;
					top: 0;
					left: 0;
					opacity: 0;
				}
			}
		}
		em{
			width: .09rem;
			height: .15rem;
			display: block;
			background: url('../../static/images/login_btn_other_inter_nromal.png') center no-repeat;
			background-size: 100% auto;
			position: absolute;
			top: 0;
			bottom: 0;
			margin: auto 0;
			right: 0;
		}
	}
	.user-name{
		&>input{
			height: .5rem;
			line-height: .5rem;
			width: 50%;
			float: right;
			text-align: right;
		}
	}
	.user-info{
		height: auto!important;
		&>span{
			width: 100%;
			float: none!important;
			display: block;
			text-align: left;
		}
		&>textarea{
			height: 4rem;
			line-height: .15rem;
			font-size: .14rem;
			font-family: PingFangSC-Regular;
			width: 100%;
			text-align: left;
			border: 0;
			&:focus{
				outline: 0;
			}
		}
	}
	</style>

<template>	
  <div class="edit-data">
  	<go-back/>
	<div class="edit-tt">
		<span>编辑个人资料</span>
		<button @click="confirmEdit($event)">完成</button>
	</div>
	<div class="edit-main">
		<p class="user-head">
			<span>用户头像</span>
			<span>
				<img :src="user_head" alt="">
				<em></em>
				<input type="file" @change="uploadHeadImg">
			</span>
		</p>
		<p class="user-name">
			<span>用户昵称</span>
			<input type="text" placeholder="请输入昵称，最多七个字符" maxlength="7" :value="user_nickName">
		</p>
		<p class="user-info">
			<span>个人介绍</span>
			<textarea placeholder="请输入个人介绍，最多六十个字符..." maxlength="60">{{user_sign}}</textarea>

		</p>
	</div>
  </div>
</template>

<script>
	import GoBack from '@/components/GoBack';
	export default{
		data(){
			return{
				user_head : window.localStorage.user_head,
				user_nickName : window.localStorage.user_nickName,
				user_sign : window.localStorage.user_sign
			}
		},
		mounted(){
			$(".user-head img").jqthumb({
				width: $(".user-head img").css("width"),
				height: $(".user-head img").css("height")
			});
		},
		methods:{
			confirmEdit	:function(e){	
				var $this = this;
				var nameVal = $(".user-name input").val();
				if(nameVal == ""){
					alert("用户昵称不能为空");
					return;
				}
				$(e.target).html("上传中...").prop("disabled", true);
				$(".edit-data input[type='text'], .edit-data textarea").prop("readonly", true);
				$(".edit-data input[type='file']").prop("disabled", true);
			    $.ajax({
	     		 	xhrFields: {
	                      withCredentials: true
	                },//跨域 后端存储session时，cookie不能用，发送此凭据
			     	url: $this.GLOBAL.URL + "index.php/login/update_datum",
			     	type:"post", 
			     	dataType: "json",
			     	data:{
			     		"nickname" : nameVal,
			     		"head_pic" : $(".user-head img").attr("src"),
			     		"sign" : $(".user-info textarea").val()
			     	},
			     	success:function(data){
			     		$(e.target).html("完成").prop("disabled", false);
			     		if(data.errno == "0"){
							window.localStorage.user_head = data.data.head_pic;
							window.localStorage.user_nickName = data.data.nickname;
							window.localStorage.user_sign = data.data.sign;
							$this.$router.push({"path" : '/Personal'});		
			     		} else {
			     			alert(data.errmsg);
			     		}

						
		     				     		
			     	}
			    });
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
				        $('.user-head img')
				        .prop("src", reader.result)
				        .jqthumb({
							width: $(".user-head img").css("width"),
							height: $(".user-head img").css("height")
						});;
				    };

				  }
			}
		},
		components:{
			GoBack
		}
	}
</script>
