<template>
  <div id="app">
    <TheHeading />
    <div class="app-container">
      <keep-alive :include="includeComponent">
        <router-view class="app-view"/>
      </keep-alive>
    </div>
    <TheFooter :class={footerfixed:isFixed} />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import store from './store'
import TheHeading from './components/TheHeading.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'index',
  components: {
    TheHeading,
    TheFooter
  },
  data () {
    return {
      isFixed: store.state.isFixed
    }
  },
  mounted () {
    console.log(store.state.isFixed)
  },
  computed: mapState({
    includeComponent: 'includeComponent'
  })
}
</script>

<style lang="less">
body{
  margin: 0 auto;
}
a{
  text-decoration: none;
}
ul{
  list-style: none;
}
#app {
  position: relative;
  font-family: "Avenir", Helvetica, sans-serif, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // min-width: 1200px;
  margin: 0 auto;
  padding: 0px;
  .app-container{
    padding-top: 64px;
    width: 100%;
    .app-view{
      margin: 0 auto;
      padding: 20px 0 40px;
      width: 1000px;
      min-height: 700px;
    }
  }
  .footerfixed{
    position: fixed;
    bottom: 0;
  }
}

</style>
