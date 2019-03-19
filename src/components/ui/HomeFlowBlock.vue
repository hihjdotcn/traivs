<template>
  <div class="home-flow-block">
    <div class="container">
      <a :href="linkUrl" target="_blank">
        <div class="title" :class=titleBgColor>
          {{ title }}
        </div>
      </a>
      <div class="detail">
        <span>{{ detail }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFlowBlock',
  props: {
    title: {
      type: String,
      required: true
    },
    titleBgColor: {
      type: String,
      default: 'title-bg-grey'
    },
    linkUrl: {
      type: String,
      required: true
    },
    detail: {
      type: String,
      default: '此条前端设计描述暂时没有描述信息！'
    }
  }
}
</script>

<style lang="less" scoped>
.home-flow-block {
  display: inline-block;
  margin: 10px;
  box-sizing: border-box;
  text-align: center;
  width: 180px;
  height: auto;
  border: 1px solid #dddddd;
  border-radius: 25px;
  .container {
    box-sizing: border-box;
    padding: 5px;
  }
  .title {
    width: 100%;
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    font-weight: bolder;
    color: white;
    border-radius: 20px 20px 5px 5px;
  }
  .title-bg-grey{
    background-color: rgb(180,180,180);
    text-shadow: 2px 2px 3px rgb(140,140,140);
  }
  .title-bg-light-green{
    background-color: rgb(127,189,66);
    text-shadow: 2px 2px 3px rgb(159, 226, 71);
    color: #17340b
  }
  .title-bg-green{
    background-color: rgb(65,184,131);
    text-shadow: 2px 2px 3px rgb(55,164,111);
  }
  .title-bg-light-blue{
    background-color: rgb(142,214,251);
    text-shadow: 2px 2px 3px rgb(205, 241, 255);
    color: rgba(24, 77, 102, 0.93);
  }
  .title-bg-dark-blue{
    background-color: rgb(47,50,66);
    text-shadow: 2px 2px 3px rgb(27,30,46);
  }
  .title-bg-yellow{
    background-color: rgb(243,214,97);
    text-shadow: 2px 2px 3px rgb(254, 243, 130);
    color: rgba(64, 55, 30);
  }
  .title-bg-orange{
    background-color: rgb(240,80,51);
    text-shadow: 2px 2px 3px rgb(231, 54, 23);
  }
  .detail {
    box-sizing: border-box;
    padding: 10px 4px 10px 10px;
    span{
      display: flex;
      text-indent: 24px;
      justify-content: center;
      line-height: 22px;
      min-height: 66px;
      font-size: 12px;
      text-align: left;
      color: rgb(150, 150, 150);
    }
  }
}
</style>
