<template>
  <div class="app-footer">
    <div class="container">
      <div class="website-info">
        火箭中文网
        <div class="desc">我们一直致力于前端设计开发的优质技术文档</div>
      </div>
      <div class="nav">
        <ul>
          <li v-for="item in footerUrl" :key="item.id"><a :href=item.urlHref target="_blank">{{ item.urlName }}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottomPart',
  data () {
    return {
      footerUrl: [
        {
          urlName: '关于',
          urlHref: ''
        }, {
          urlName: '京东云',
          urlHref: 'https://www.jdcloud.com/'
        }, {
          urlName: '码云',
          urlHref: 'https://gitee.com/'
        }
      ]
    }
  }
}
</script>

<style lang="less">
.app-footer{
  border-top: 1px solid rgb(220,220,220);
  padding: 30px 0;
  width: 100%;
  text-align: left;
  min-height: 60px;
  .container{
    // display: flex;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 10px;
    width: 1000px;
  }
  .website-info{
    float: left;
    font-size: 20px;
    font-weight: bold;
    color: #4b1a50;
    .desc{
      padding-top:10px;
      font-size: 16px;
      font-weight: 100;
      color: rgb(180,180,180);
    }
  }
  .nav{
    float: right;
    li{
      display: inline-block;
      padding-left: 10px;
    }
    a{
      color:seagreen;
      border-bottom: 1px dashed rgb(220,220,220)
    }
    a:hover{
      color:rgb(6, 71, 34);
    }
  }
}
</style>
