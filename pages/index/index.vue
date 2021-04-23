
<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title mt--10">{{title}}</text>
		</view>
		<view class="mt--99 mr--99 ml--99 mb--99">demo</view>
		<button @click="handlerRequest()">
			点击进行请求
		</button>
		
	</view>
	
</template>
<script>
	import {getLocal} from '../../api/local.js'
	export default {
		
		data() {
			return {
				title: 'Hello'
			}
		},
		
		onLoad() {
			let obj = {
				name:'alice',
				age:14,
				color:"red"
			}	
			let temp = [
				{
					title:'11',
					decs:'???'
				},
				{
					title:'22',
					decs:'???'
				},
				{
					title:'22',
					decs:'???'
				}	
			]
			let a = Object.values(obj)
			let b = Object.keys(obj)
			console.log(a,b)
			b.forEach((item,index)=>{
				temp[index].decs = obj[item]
			})
			console.log(temp)
		},
		methods: {
			async handlerRequest(){
				
				let params = {
					id:1
				}
				let id = 1
				let res = await getLocal(id);
				console.log(res)
			}
		}
	}
</script>

<style lang="scss">
	@for $i from 1 to 101 {
		$px:1px;
		.mt--#{$i}{
			margin-top:$px*$i;
		}
		.mb--#{$i}{
			margin-bottom:$px*$i;
		}
		.ml--#{$i}{
			margin-left:$px*$i;
		}
		.mr--#{$i}{
			margin-right:$px*$i;
		}
	}
	@mixin demo($mt) {
		margin:{
			top: $mt;
		}
	}
	.mt--10{
		// $number:10px;
		// margin-top: $number ;
		@include demo(10px)
	}
	.mt--20{
		margin-top: 10px;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
