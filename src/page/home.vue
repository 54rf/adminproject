<template>
  <div class="home">
    <myheader></myheader>
    <div class="content">
      <div class="container">
        <div class="container-left">
          <div class="container-left-text">功能</div>
          <div class="container-left-tab">公众号数据统计</div>
          <router-link :to="{name:'businessCard'}" tag="div" class="container-left-tab">个人名片</router-link>
          <router-link :to="{name:'businessCard'}" tag="div" class="container-left-tab">群名片</router-link>
          <router-link :to="{name:'h5Shunt'}" tag="div" class="container-left-tab">h5分流工具</router-link>
        </div>
        <router-view class="container-right">1</router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {}
  },
  mounted () {

  },
  methods: {},
  computed: {}
}
</script>

<style scoped lang="less">
.home {
  position: fixed;
  top: 64px;
  width: 100%;
  height: 100%;
}

.content {
  height: 100%;
  background-color: #e7e8eb;
  padding: 50px;
  box-sizing: border-box;
  .container {
    background: #fff;
    display: flex;
    height: 100%;
  }
  .container-left {
    width: 213px;
    border: 1px solid #dadada;
    text-align: center;
    .container-left-text {
      font-size: 16px;
      color: #b6b6b6;
      padding: 15px 0;
    }
    .container-left-tab {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 14px;
      color: #3b495b;
    }
    .container-left-tab.active, .container-left-tab:hover {
      background-color: #3b495b;
      color: #fff;
    }
  }
  .container-right {
    flex: 1;
    border: 1px solid #dadada;
    border-left: 0;
    overflow: auto;
  }
  /*滚动条*/
  /*::-webkit-scrollbar {
    width: 10px; 
    height: 10px; 
  }*/
}
</style>
