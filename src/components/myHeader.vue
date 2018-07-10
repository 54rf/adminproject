<template>
	<div class="myheader">
		<div>选择自己.工具</div>
		<div class="logOff">账号退出</div>
	</div>
</template>

<script>
	export default{
		name:'index',
		data () {
			return {

			}
		},
		mounted(){

		},
		methods: {

		},
		computed: {

		}
	}
</script>

<style scoped lang="less">
.myheader{
  width: 100%;
	  height: 64px;
  box-sizing: border-box;
  overflow: hidden;
	  background-color: #ffffff;
	  display:flex;
	  justify-content: space-between;
	  align-items: center;
	  padding: 0 87px;
  position: fixed;
  top:0;
	  div{
	  	font-size: 20px;
	  }
  .logOff{
    font-size: 14px;
  }
}
</style>
