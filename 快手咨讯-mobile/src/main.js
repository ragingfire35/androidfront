// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import $ from 'jquery'

import App from './App'
import router from './router'

// 拖拽轮播图
import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'
Vue.use(wcSwiper);

//mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//导航栏按钮拖拽排序
import VueDND from 'awe-dnd'
Vue.use(VueDND)

//样式重置
import "../static/css/reset.css";
import "../static/js/plugIn/rem.js";

/*//表情插件
import "../static/js/plugIn/smohan.face.js"
import '../static/css/plugIn/smohan.face.css';*/



//filter
    //格式化时间
    import {formatDate} from '../static/js/plugIn/date.js';
    Vue.filter("formatDate", function(time){
        let date = new Date( time );
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
    });
    
    // 字数截取
    Vue.filter("subStrText", function(value,setTextNum){
        if (value.length > setTextNum) {
          var needText = value.substr(0, setTextNum) + "...";
          return needText;
        } else {
          return value;
        }
    });


//directive
    // 处理图片
    //缩略图插件
    import '../static/js/plugIn/jqthumb.min.js';

Vue.config.productionTip = false;

//config
import Config from './components/Config'
Vue.prototype.GLOBAL = Config

/*import 'onsenui/css/onsenui.css'; // Webpack CSS import
import 'onsenui/css/onsen-css-components.css'; // Webpack CSS import
import VueOnsen from 'vue-onsenui';
Vue.use(VueOnsen);*/

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, },
  data: {
  	eventHub : new Vue
  }
})


/*Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})*/
