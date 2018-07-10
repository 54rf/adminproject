<template>
  <div class="businessCard">
    <div class="content">
      <sontab></sontab>
      <ul class="container-list">
        <li class="container-classify">
          <div class="container-text">已发布</div>
          <ul class="container-body">
            <li class="container-item">
              <div class="container-item-left">
                <img src="../assets/logo.png" alt="">
              </div>
              <div class="container-item-right">
                <p class="container-item-right-note">备注</p>
                <p class="container-item-right-scenario">场景</p>
                <p class="container-item-right-title">页面标题</p>
                <p class="container-item-right-updatetime">更新时间2018.01.01</p>
                <div class="btns">
                  <div class="btn btn-more">更多</div>
                  <div class="btn btn-del">删除</div>
                  <div class="btn btn-end">结束</div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
	import sontab from "@/components/sontab";
export default {
  name: 'businessCard',
  components:{
  	sontab
  },
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
.businessCard {
  .container-text {
    height: 50px;
    line-height: 50px;
    padding-left: 26px;
    background-color: #edefed;
    font-size: 14px;
    color: #717c83;
  }
  .container-body {
    margin-top: 25px;
  }
  .container-list {
    padding: 0 48px;
  }
  .container-item {
    display: flex;
  }
  .container-item-left {
    margin-right: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container-item-left img {
    width: 200px;
    height: 200px;
  }
  .container-item-right-note {
    color: #4a4a4a;
    font-size: 28px;
    margin-bottom: 20px;
  }
  .container-item-right-scenario, .container-item-right-title {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .container-item-right-updatetime {
    font-size: 13px;
    color: #9b9b9b;
    margin-bottom: 10px;
  }
  .btns {
    display: flex;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 146px;
    height: 40px;
    border-radius: 100px;
    border: solid 1px #979797;
    color: #979797;
    margin-left: 20px;
    &:first-child {
      margin-left: 0;
      color: #4a90e2;
      border-color: #4a90e2;
    }
  }
}
</style>
