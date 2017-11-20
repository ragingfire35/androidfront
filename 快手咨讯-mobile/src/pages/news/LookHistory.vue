<style lang="less" scoped>
	.clearAll-box{
		width: 100%;
		height: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		background: rgba(0,0,0, 0.2);
		display: none;
	}
	.clearAll-dialog{
		background: #F8F8F8;
		width: 100%;
		text-align: center;
		position: fixed;
		left: 0;
		bottom: 0;
		display: none;
		p{
			width: 100%;
			background: #fff;
			color: #A4A4A4;
			font-size: .12rem;
			padding: .3rem 0;
		}
		button{
			width: 100%;
			height: .5rem;
			display: block;
			background: #fff;
			font-size: .14rem;
			color: #303030;
			&.exit-btn{
				margin-top: .1rem;
			}
		}
	}
    .look-main{
        width: 100%;
        overflow: hidden;
    }
    .look-section{
        width: 100%;
        &>p{
            font-size: .12rem;
            color: #AAAAAA;
            text-align: left;
            width: 100%;
            height: .5rem;
            line-height: .5rem;
        }
    }
    .newsList{
        width: 100%;
        li{
            width: 4.12rem;
            height: .82rem;  
            overflow: hidden;
            margin-bottom: .2rem;
            a{
                float: left;
                width: 3.3rem;
                margin-top: .1rem;
                overflow: hidden;
            }
            &:last-of-type{
                margin-bottom: 0;
            }
            i{
                float: left;
                width:.82rem;
                height: .82rem;
                text-align:center;
                background-color:#E2421B;
                position: relative;
                img{
                    display: block;
                    width: .26rem;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                }
               

            }
        }
    }
    .newsLt{
        float: left;
        width: 2.2rem;
        text-align: justify;
        .news-tt{
            width: 100%;
            height: .4rem;
            text-align: left;
            font-size: .15rem;
            font-weight: bold;
            color: #303030;
            line-height: .22rem;
            margin-top: -.04rem;
        }
    }
    .news-author-info{
        color: #a8a8a8;
        font-size: .12rem;
        text-align: left;
        margin-top: .08rem;
    }
    .newsRt{
        width: .94rem;
        height: .62rem;
        float: left;
        margin-left: .16rem;
        img{
            width: 100%;
            height: 100%;
            display: block;

        }
    }
    .history-list{
        text-align: left;
        li{
            margin-bottom: .14rem;

        }
        
    }
    .his-bt{
        font-size: .15rem;
        color: #000000;
        font-weight: bold;
        line-height: .24rem;
        letter-spacing: .01rem;
        text-align: justify;
    }
    .LookHistory{
        width: 100%;
        padding: 0 .15rem;
        overflow: hidden;
       
    }
    .Look-history-top{
        height: .5rem;
        width: 100%;
        line-height: .5rem;
        font-size: .15rem;
        color: #303030;       
        &>p{
            width: .68rem;
            margin: 0 auto;
        }
        &>button{
            height: .5rem;
            line-height: .5rem;
            display: block;
            color: #FF8000;
            background: transparent;
            font-size: .14rem;
            position: absolute;
            right: .15rem;
            top: 0;

        }
    }
    .swipeleft{
        transform:translateX(-.82rem);
        -webkit-transform:translateX(-.82rem);
        -webkit-transition:all 0.3s;
        transition:all 0.3s;
    }
</style>
<template>
    <div class="LookHistory">
        <go-back/>
        <div class="Look-history-top">
            <p>浏览历史</p>
            <button @click="dialogToggle" >清除全部</button>
        </div>
    	<div class="look-main">
            <div class="look-section" v-for="(item,index) in list">
                <p v-if="item.content.length">{{item.lookTime}}</p>
                <ul class="newsList">
                    <li v-for="(one, j) in item.content">
                        <router-link :to="{ path: '/NewsDetails', query: { newsid: item.news_id }}" href="javascript:;">
                            <div class="newsLt">
                                <p class="news-tt">{{one.title}}</p>
                                <p class="news-author-info">
                                    <span class="author-name">{{one.admin_id}}</span>
                                    <span>&ensp;·&ensp;</span>
                                    <span class="public-time" :data-timeago="parseInt(one.ctime+'000') | formatDate"></span>
                                    <span>&ensp;·&ensp;</span>
                                    <span class="news-source">{{one.source}}</span>
                                </p>
                            </div>
                            <div class="newsRt">
                                <img v-lazy="basePath + one.cover_img" alt="">
                            </div>
                        </router-link>
                         <i @click="delTheDateBase(0, one.news_id, one, j, index)">
                             <img src="../../../static/images/del.png" alt="">
                         </i>
                    </li>   
                </ul>
            </div>  
        </div>
        
        <div class="clearAll-box">
        	<div class="clearAll-dialog">
	        	<p>确定要清空全部浏览历史？</p>
	        	<button class="confirm-btn" @click="delTheDateBase(1, "");">确定</button>
	        	<button class="exit-btn" @click="dialogToggle">取消</button>
        	</div>
        </div>
    </div>
</template>

<script>
    import GoBack from '@/components/GoBack';
    import { Indicator } from 'mint-ui';
    export default{
        data(){
        	return{
                basePath : this.GLOBAL.__PUBLIC__,
	            list:[
                        {
                            lookTime : '今天',
                            content :[]
                        },
                        {
                            lookTime : '更久',
                            content :[]
                        }
	            ],
	            expansion : null 	//是否存在展开的list
        	}
                                               
        },
        components:{
            GoBack
        },
        mounted:function(){
            Indicator.open({
              text: '加载中...',
              spinnerType: 'fading-circle'
            });
            var $this=this;
            
            $.ajax({
                xhrFields: {
                      withCredentials: true
                },//跨域 后端存储session时，cookie不能用，发送此凭据
                url: $this.GLOBAL.URL + "index.php/News/get_history",
                type:"post", 
                dataType: "json",
                success:function(data){
                    $.each(data.data, function(i, j){
                        if(j.ctime){
                            data.data.current_time < j.ctime ? 
                                $this.list[0].content.push(j) :
                                $this.list[1].content.push(j) 
                        }
                    });
                    $this.setting();
                    Indicator.close();
                }
            });


        },
        methods:{
            setting : function(){
                var $this = this;
                $(function(){
                    $this.GLOBAL.agoTime.render(document.querySelectorAll('.public-time'), 'zh_CN');
                    //将$this保存 区分以下触发事件的this
                    var container = document.querySelectorAll('.newsList li');
                    for(var i = 0; i < container.length; i++){                          
                        //为每个特定DOM元素绑定touchstart touchmove时间监听 判断滑动方向
                        var x,  X;
                        container[i].addEventListener('touchstart', function(event) {   
                            //记录初始触控点横坐标
                            x = event.changedTouches[0].pageX;
                        });
                        container[i].addEventListener('touchmove', function(event){
                            // event.preventDefault()
                            X = event.changedTouches[0].pageX;                          
                                //记录当前触控点横坐标
                            if($this.expansion){                                       
                                //判断是否展开，如果展开则收起
                                $this.expansion.className = "";
                            }     
                            if(X - x > 30){                                             
                                //右滑
                                this.className = "";                                    
                                //右滑收起
                            }
                            if(x - X > 30){                                             
                                //左滑
                                this.className = "swipeleft";                           
                                //左滑展开
                                $this.expansion = this;
                            }
                        });
                    }
                });   
            },

            del:function(one,j,index){
                this.list[index].content.splice(j,1);                                       
                 //删除List这条数据 DOM随之更新渲染
                var container = document.querySelector('.swipeleft');           
                //将展开的DOM归位 除掉样式类
                container.className="";
                this.expansion=null;
            },
            delAll : function(){
                this.list = [];
				this.dialogToggle();
            },
            delTheDateBase : function(delAll, newsId, one, j, index){
                var $this=this;
                
                $.ajax({
                    xhrFields: {
                          withCredentials: true
                    },//跨域 后端存储session时，cookie不能用，发送此凭据
                    url: $this.GLOBAL.URL + "index.php/News/del_history",
                    type:"post", 
                    data : {
                       news_id : newsId,
                       flag : delAll
                    },
                    dataType: "json",
                    success:function(data){
                        if (data.errno == 0) {
                            delAll == 0 ?  $this.del(one,j,index) : $this.delAll();
                        }
                    }
                });
            },
            dialogToggle : function(){
            	$(".clearAll-box").fadeToggle(100);
            	$(".clearAll-dialog").slideToggle(200);
            }
        }
    };
</script>   
</html>