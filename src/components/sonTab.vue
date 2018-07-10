<template>
	<div class="sontab">
		<div class="container-head">
			<div class="head-btn head-btn1">个人名片列表</div>
			<div class="head-btn head-btn2">个人名片列表</div>
			<div class="head-btn head-btn3">个人名片列表</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'sontab',
		data() {
			return {

			}
		},
		mounted() {

		},
		methods: {

		},
		computed: {

		}
	}
</script>

<style scoped lang="less">
	.container-head {
		display: flex;
		padding: 30px 48px;
	}
	
	.head-btn {
		width: 126px;
		height: 37px;
		line-height: 37px;
		text-align: center;
		font-size: 14px;
	}
	
	.head-btn1 {
		background-color: #576477;
		border: solid 1px #576477;
		color: #fff;
	}
	
	.head-btn2 {
		color: #576477;
		border: solid 1px #576477;
		margin: 0 5px;
	}
	
	.head-btn3 {
		border-radius: 100px;
		background-color: #4a90e2;
		color: #fff;
	}
</style>