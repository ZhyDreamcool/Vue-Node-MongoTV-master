import Vue from 'vue'
import VueRouter from 'vue-router'
import loginRegister from '../views/loginRegister.vue'
import Collect from '../views/index/Collect.vue'
import Collects from '../views/Variety Show/Collects.vue'
import Recommend from '@/views/recommend/Recommend.vue'
import Books from '@/views/books/Content.vue'

Vue.use(VueRouter)

const routes = [
  {
	  path:'/',
	  name:'login',
	  component: loginRegister
  },
  {
    name: 'collect',
    path: '/collect',
    //不加s
    component: Collect,
    meta: {
      title: '动漫'
    }
  },
  {
    name: 'collects',
    path: '/Collects',
    //不加s
    component: Collects,
    meta: {
      title: '综艺'
    }
  },
  {
    path: '/Recommend',
    name: 'recommend',
    component: Recommend,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/Content',
    name: 'books',
    component: Books,
    meta: {
      title: '推荐'
    }
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
