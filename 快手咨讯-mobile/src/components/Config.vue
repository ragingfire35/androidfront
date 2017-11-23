<script type="text/javascript">
	//*** 时间前
	import timeago from 'timeago.js';
	var agoTime = timeago();
	var URL = 'http://192.168.8.103/';
	var __PUBLIC__ = URL + 'Public/';
/*	window.localStorage.IsLoginIn  = 'false';
	window.localStorage.user_head = "";
	window.localStorage.user_nickName = "";*/
/*	var IsLoginIn = window.localStorage.IsLoginIn || 'false';//全局是否登录
	var USER_INFO = {
			user_head : window.localStorage.user_head,
			user_nickName : window.localStorage.user_nickName
	}*/
	//var app_key = '7529324a0d8d018f4fbd9a07aeb11643';

	
	export default
	{
	  agoTime,
	  URL,
	  __PUBLIC__
	  //USER_INFO,
	  //IsLoginIn
	  //app_key,
	}
</script>