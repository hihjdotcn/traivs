<template>
    <div class="home-page">
        <div class="title">
            前端设计相关优质项目推荐
            <div class="desc">专注网页端相关的前沿技术</div>
        </div>
        <div class="content">
            <HomeFlowBlock v-for="item in homeFlowArr" :key="item.id" :title=item.title :linkName=item.linkName
                           :linkUrl=item.linkUrl :detail=item.detail :titleBgColor=item.titleBgColor />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HomeFlowBlock from '../components/ui/HomeFlowBlock.vue'

export default {
  name: 'home',
  components: {
    HomeFlowBlock
  },
  data () {
    return {
      homeFlowArr: [
        {
          title: 'Vue.js',
          linkName: 'Vue官网',
          linkUrl: 'https://cn.vuejs.org',
          detail: 'Vue (读音类似于view) 是一套用于构建用户界面的渐进式框架。',
          titleBgColor: 'title-bg-green'
        }, {
          title: 'webpack',
          linkName: 'webpack官网',
          linkUrl: 'https://www.webpackjs.com/',
          detail: 'webpack 是一个现代应用程序的静态模块打包器。',
          titleBgColor: 'title-bg-light-blue'
        }, {
          title: 'Electron',
          linkName: 'Electron官网',
          linkUrl: 'https://www.electronjs.cn/',
          detail: '使用 JavaScript, HTML 和 CSS 构建跨平台的桌面应用。',
          titleBgColor: 'title-bg-dark-blue'
        }, {
          title: 'Git',
          linkName: 'Git使用文档',
          linkUrl: 'https://progit.bootcss.com/',
          detail: 'Git的使用基础和原理，让你从初学者成为Git专家。',
          titleBgColor: 'title-bg-orange'
        }, {
          title: 'node.js',
          linkName: 'node官网',
          linkUrl: 'https://nodejs.org',
          detail: 'Node.js是一个基于 Chrome V8 引擎的JavaScript运行环境。',
          titleBgColor: 'title-bg-light-green'
        }, {
          title: 'Babel',
          linkName: 'Babel文档',
          linkUrl: 'https://babel.bootcss.com/',
          detail: 'Babel是 JavaScript 编译器。',
          titleBgColor: 'title-bg-yellow'
        }
      ],
      myArr: []
    }
  },
  methods: {
    // 数组排序
    arrSort (arrData) {
      return arrData.sort((a, b) => a - b)
    },
    // 数组求和
    sum (...args) {
      let result = 0
      for (let i = 0, len = args.length; i < len; i++) {
        result = result + args[i]
      }
      return result
    }
  },
  mounted () {
    let oldArr = [2, 5, 6, 8, 3]
    this.myArr = this.sum(...oldArr)
    console.log(this.myArr)
  }
}
</script>

<style lang="less" scoped>
.home-page {
  .title {
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
  .desc {
    padding-top: 6px;
    font-size: 18px;
    color: rgb(180, 180, 180);
  }
  .content {
    text-align: left;
    width: 100%;
  }
}
</style>
