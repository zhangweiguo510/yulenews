<template>
	<view class="load-more">
		<image src="../../static/img/tabbar/loadmore.png" style="width: 50upx;height: 50upx;" v-show="status == 1"></image>
		<text class="laod-text">{{text[status]}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			status: {
				type: Number,
				default: 0
			},
			text: {
				type: Array,
				default () {
					return [
						"上拉加载更多",
						"正在加载...",
						"没有更多数据"
					]
				}
			}
		},
	}
</script>

<style lang="scss">
	.load-more {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 90upx;
		padding-top: 10upx;

		.load-icon {
			display: block;
			width: 36upx;
			height: 36upx;
			margin-right: 12upx;
			animation: load 1.2s cubic-bezier(0.37, 1.08, 0.7, 0.74) infinite;
		}

		.load-text {
			font-size: 28upx;
			color: #888;
		}
	}

	@-webkit-keyframes load {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
