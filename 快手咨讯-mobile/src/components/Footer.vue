<style lang="less" scoped>
	.Footer-main{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1rem;
		background-image: -webkit-linear-gradient(rgba(255,255,255,0.00) 0%, #FFFFFF 55%);
		background-image: -o-linear-gradient(rgba(255,255,255,0.00) 0%, #FFFFFF 55%);
		background-image: linear-gradient(rgba(255,255,255,0.00) 0%, #FFFFFF 55%);
		.btn-main{
			width: 2.7rem;
			height: .5rem;
			margin: .5rem auto 0 auto;
			&>button{
				width: .5rem;
				height: .5rem;
				margin-right: .6rem;
				float: left;
				&.personal-btn{
					margin-right: 0;
				}
				&:active{
					opacity: 1;
				}
			}
		}
		.home-btn{
			background:url("../../static/images/general_btn_home_normal.png") top left no-repeat;
			background-size: 100% auto;
			&.selected{
				background:url("../../static/images/general_btn_home_selected.png") top left no-repeat;
				background-size: 100% auto;
			}
		}
		.search-btn{
			background:url("../../static/images/general_btn_search_normal.png") top left no-repeat;
			background-size: 100% auto;
			&.selected{
				background:url("../../static/images/general_btn_search_selected.png") top left no-repeat;
				background-size: 100% auto;
			}
		}
		.personal-btn{
			background: transparent;
			&.normal{
				background:url("../../static/images/general_btn_login_normal.png") top left no-repeat!important;
				background-size: 100% auto!important;
			}

			&.selected{
				background:url("../../static/images/general_btn_login_selected.png") top left no-repeat!important;
				background-size: 100% auto!important;
			}
		}
	}
</style>
<style>	
	.btn-main .jqthumb{
		width: .3rem!important;
		height: .3rem!important;						
	}		
</style>
<template>
	<footer class="Footer-main" v-if="">
		<div class="btn-main">
			<router-link to="/" class='home-btn' tag="button" exact></router-link>
			<router-link to="/Search" class="search-btn" tag="button"></router-link>
			<button class="personal-btn normal" @click="linkFn" >
			</button>
		</div>
	</footer>
</template>
<script>
	export default{
		data(){
			return{
			}
		},
		components:{

		},
		updated(){

		},
		mounted(){
			this.personStyle();
		},
		methods:{
			linkFn : function(){
				window.localStorage.IsLoginIn == "true" ?
				    this.$router.push({"path" : "/Personal"}) :
				    this.$router.push({"path" : "/loginIn"});
			},
			personStyle(){
				if( window.localStorage.IsLoginIn == "true"){
					$(".personal-btn")
					.removeClass("selected normal")
					.html("<img class='person' src='"+ window.localStorage.user_head +"'>");
					$("img.person").jqthumb();
					if(this.$route.path == "/Personal"){
						$(".personal-btn").addClass('router-link-exact-active selected').html("");
					}
				} else {
					$(".personal-btn").addClass('normal');
					if(this.$route.path == "/loginIn"){
						$(".personal-btn").addClass('router-link-exact-active selected').html("");
					}
				}
			}
		},
		watch: {
		   '$route' (to, from) {
		   		this.personStyle()
		   }
		}
	}
</script>