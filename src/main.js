import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 路由发生变化时
router.beforeEach((to, from, next) => {
  // 修改页面meta
  if (to.meta.content) {
    let head = document.getElementsByTagName('head')
    let oldMetaArr = head[0].getElementsByTagName('meta') // 定位旧的meta数组
    oldMetaArr[oldMetaArr.length - 1].setAttribute('content', to.meta.content)
  }
  // 修改页面 title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // 刷新页面的 footer -> fixed 的状态
  let windowHeight = window.innerHeight
  let containerHeight = document.getElementsByClassName('app-container')[0].clientHeight + 64;
  (windowHeight < containerHeight) ? store.state.isFixed = false : store.state.isFixed = true
  console.log('isFixed的状态: ' + store.state.isFixed)
  next()
})
