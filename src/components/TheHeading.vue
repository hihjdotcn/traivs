<template>
    <div class="app-header">
        <div id="nav">
            <router-link to="/">首页</router-link> |
            <router-link to="/program" >优质项目</router-link> |
            <router-link to="/talk" >文章</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TheHeading',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.app-header {
  z-index: 9;
  position: fixed;
  width: 100%;
  height: 64px;
  text-align: center;
  font-size: 18px;
  color: aliceblue;
  background-color: #37003c;
  opacity: .9;
}
#nav {
  box-sizing: border-box;
  padding: 10px;
  width: 1000px;
  margin: 0 auto;
  color: #5b0063;
  a {
    padding: 0 10px;
    /*font-weight: bold;*/
    line-height: 44px;
    color: #03fe89;
    &.router-link-exact-active {
      color: #c2fee9;
    }
  }
}
</style>
