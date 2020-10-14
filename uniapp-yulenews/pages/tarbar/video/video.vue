<template>
	<view class="container">
		<pulldownRefresh ref="pulldownRefresh" @refresh="initVideoData">
			<scroll-view class="panel-scroll-box" scroll-y @scrolltolower="loadMoreData">
				<view v-for="(videoItem,index) in videoList" :key="index" @tap="handleVideoDetail(videoItem)">
					<videoCell :videoItem="videoItem"></videoCell>
				</view>
				<loadMore :status="loadMoreStatus"></loadMore>
				<view :style="{height: footerbottom}"></view>
			</scroll-view>
		</pulldownRefresh>
	</view>
</template>

<script>
	import interfaces from '../../../utils/interfaces.js'
	import videoCell from '../../../components/video/videoCell.vue'
	import pulldownRefresh from '../../../components/pulldown/pulldown.vue'
	import loadMore from '../../../components/loadMore/loadMore.vue'
	export default {
		components: {
			videoCell,
			pulldownRefresh,
			loadMore
		},
		data() {
			return {
				videoList: [],
				page: 1,
				size: 5,
				loadMoreStatus: 0,
				footerbottom: 0
			}
		},
		onLoad() {
			this.initVideoData()
			// #ifdef H5
			this.footerbottom = document.getElementsByTagName('uni-tabbar')[0].offsetHeight + "px";
			// #endif
		},
		methods: {
			initVideoData() {
				this.page = 1
				this.request({
					url: interfaces.getVideoList + `${this.page}/${this.size}`,
					success: (res => {
						// console.log(res.data)
						this.videoList = res.data
						this.loadMoreStatus = 0
						this.$refs.pulldownRefresh && this.$refs.pulldownRefresh.endPulldownRefresh()
					})
				})
			},
			loadMoreData() {
				this.page++;
				this.loadMoreStatus = 1;
				this.request({
					url: interfaces.getVideoList + `${this.page}/${this.size}`,
					success: (res => {
						if (res.data.length > 0) {
							res.data.forEach(item => {
								this.videoList.push(item);
							})
							this.loadMoreStatus = 0;
						} else {
							// 返回数据为空 没有更多数据
							this.loadMoreStatus = 2;
							return false;
						}
					})
				})
			},
			handleVideoDetail(videoItem){
				uni.navigateTo({
					url:'./videoDetail'
				})
			}
		}
	}
</script>

<style lang="scss">
	.panel-scroll-box {
		height: 100%;
		// #ifdef H5
		height: calc(100% - 88upx);
		// #endif
	}
</style>
