import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // redirect: '/englishCorner',
      meta: {
        title: '火箭网-首页-new',
        content: '前端技术客栈 | node.js | webpack | 网页自适应设计 | css世界'
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
