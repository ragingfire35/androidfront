import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld' //示例
import PageTransition from '@/components/PageTransition'
import Home from '@/pages/Home'
import Search from '@/pages/search/Search'
import SearchDetails from '@/pages/search/SearchDetails'
import PerfectAccount from '@/pages/PerfectAccount'
import AboutUs from '@/pages/AboutUs'
import OtherLogin from '@/pages/OtherLogin'
import loginIn from '@/pages/loginIn'
import EditData from '@/pages/EditData'
import NavBtnSort from '@/pages/NavBtnSort'
import AuthorDetails from '@/pages/news/AuthorDetails'
import NewsDetails from '@/pages/news/NewsDetails'
import LookHistory from '@/pages/news/LookHistory'
import Personal from '@/pages/Personal'

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      //name: 'PageTransition',
      //因为当某个路由有子级路由的时候，这时候父级路由需要一个默认的路由，所以父级路由不能定义name属性
      component: PageTransition,
      children:[
          {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
              footerShow : true
            }
            
          },                
          {
            path: '/Search',
            name: 'Search',
            component: Search,
            meta: {
              footerShow : true
            }
          },
          { 
            path: "/Search/SearchDetails", 
            name: "SearchDetails",
            component: SearchDetails,
            meta: {
              footerShow : true
            }
          },
          {
            path: '/PerfectAccount',
            name: 'PerfectAccount',
            component: PerfectAccount,
            meta: {
              footerShow : true
            }
          },
          {
            path: '/AboutUs',
            name: 'AboutUs',
            component: AboutUs,
            meta: {
              footerShow : false
            }
          },
          {
            path: '/OtherLogin',
            name: 'OtherLogin',
            component: OtherLogin,
            meta: {
              footerShow : true
            }
          }, 
          {
            path: '/loginIn',
            name: 'loginIn',
            component: loginIn,
            meta: {
              footerShow : true
            }
          }, 
          {
            path: '/EditData',
            name: 'EditData',
            component: EditData,
            meta: {
              footerShow : false
            }
          },
          {
            path: '/NavBtnSort',
            name: 'NavBtnSort',
            component: NavBtnSort,
            meta: {
              footerShow : false
            }
          },
          {
            path: '/AuthorDetails',
            name: 'AuthorDetails',
            component: AuthorDetails,
            meta: {
              footerShow : true
            }
          },
          {
            path: '/NewsDetails',
            name: 'NewsDetails',
            component: NewsDetails,
            meta: {
              footerShow : true
            }
          },
          {
            path: '/LookHistory',
            name: 'LookHistory',
            component: LookHistory,
            meta: {
              footerShow : false
            }
          },
          {
            path: '/Personal',
            name: 'Personal',
            component: Personal,
            meta: {
              footerShow : true
            }
          }
      ]
    }

  ],
  linkActiveClass: "selected"
})
