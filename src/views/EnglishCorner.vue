<template>
  <div class="englishCorner">
    <h1>那些年常用的程序英语词汇。</h1>
    <div class="container">
      <ul v-for="item in wordArr" :key="item.id">
        <li class="en">{{ item.en }}</li>
        <li class="cn">{{ item.cn }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'englishCorner',
  data () {
    return {
      wordArr: [
        {
          en: 'alias',
          cn: '别名'
        }, {
          en: 'argument',
          cn: '函数调用时的实际参数'
        }, {
          en: 'parameter',
          cn: '函数定义中的参数'
        }, {
          en: 'provide',
          cn: '提供'
        }
      ]
    }
  }
}

</script>
<style lang="less">
  .englishCorner{
    .container{
      padding-top: 20px;
      ul{
        font-size: 18px;
        font-weight: bold;
      }
      li{
        padding-bottom: 10px;
        display: inline-block;
        width: 220px;
        line-height: 1;
        text-align: left;
        border-bottom: 1px dashed #dcdcdc;
      }
      .cn{
        color: dimgrey
      }

    }
  }
</style>
