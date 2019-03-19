import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // redirect: '/englishCorner',
      meta: {
        title: '火箭网-首页',
        content: '前端技术客栈 | node.js | webpack | 网页自适应设计 | css世界'
      }
    },
    {
      path: '/littleApp',
      name: 'littleApp',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/LittleApp'),
      meta: {
        title: '火箭网-小应用',
        content: '常用应用汇总'
      }
    },
    {
      path: '/program',
      name: 'program',
      component: () => import('./views/Program'),
      meta: {
        title: '火箭网-优质项目',
        content: '前端相关站点'
      }
    },
    {
      path: '/talk',
      name: 'talk',
      component: () => import('./views/Talk'),
      meta: {
        title: '火箭网-文章',
        content: '前端相关知识分享'
      }
    }
  ]
})
