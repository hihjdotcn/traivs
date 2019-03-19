<template>
  <div class="page-coolSite">
    <h1>前端社区相关</h1>
    <div class="content">
      <HomeFlowBlock v-for="item in homeFlowArr" :key="item.id" :title=item.title :linkName=item.linkName
                      :linkUrl=item.linkUrl :detail=item.detail :titleBgColor=item.titleBgColor />
    </div>
  </div>
</template>

<script>
import HomeFlowBlock from '../components/ui/HomeFlowBlock'

export default {
  name: 'program',
  components: {
    HomeFlowBlock
  },
  data () {
    return {
      homeFlowArr: [
        {
          title: 'webpack',
          linkUrl: 'https://www.webpackjs.com/',
          detail: 'webpack 是一个现代应用程序的静态模块打包器。',
          titleBgColor: 'title-bg-light-blue'
        }, {
          title: 'Electron',
          linkUrl: 'https://www.electronjs.cn/',
          detail: '使用 JavaScript, HTML 和 CSS 构建跨平台的桌面应用。',
          titleBgColor: 'title-bg-dark-blue'
        }
      ]
      // siteArr: [
      //   {
      //     urlName: 'jsfiddle',
      //     urlHref: 'https://jsfiddle.net/',
      //     urlDesc: '一个Web开发人员的练习场,可在线编辑和测试 HTML、CSS、JavaScript代码片段。'
      //   }, {
      //     urlName: 'iconfont',
      //     urlHref: 'http://iconfont.cn',
      //     urlDesc: '阿里妈妈MUX倾力打造的矢量图标管理、交流平台。'
      //   }, {
      //     urlName: 'segmentfault',
      //     urlHref: 'https://segmentfault.com',
      //     urlDesc: '一个技术问答交流社区平台，可以检索、交流和分享任何技术编程相关的问题及知识。'
      //   }, {
      //     urlName: 'Can i use',
      //     urlHref: 'https://caniuse.com/',
      //     urlDesc: '查询html5新功能在现代浏览器中的兼容情况。'
      //   }
      // ]
    }
  }
}
</script>

<style lang="less">
.page-coolSite{
  .content{
    text-align: left;
  }
}
</style>
