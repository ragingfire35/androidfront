<style scoped>
	.goBack-btn{
		display: block;
		width: .5rem;
		height: .5rem;
		background: url("../../static/images/general_btn_black_back_normal.png") center no-repeat;
		background-size: 100% auto;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1
	}	
</style>
<template>
	<div class="goBackBox">
		<button class="goBack-btn" @click="goback"></button>
	</div>
</template>
<script>
	import GoBack from '@/components/GoBack';
	export default({
		data(){
			return{
				isBack : false
			}
		},
		mounted(){

		},
		methods:{
			goback(){
				this.$router.goBack();
			}
		}


	})
</script>