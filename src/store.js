import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // keep-alive配置
    includeComponent: [],
    isFixed: ''
  },
  mutations: {
    // 将页面加入keep-alive
    keepIn (state, keepCommponent) {
      state.includeComponent.push(keepCommponent)
    },
    // 将页面从keep-alive中除去
    keepOut (state) {
      state.includeComponent = []
    }
  },
  actions: {

  }
})
