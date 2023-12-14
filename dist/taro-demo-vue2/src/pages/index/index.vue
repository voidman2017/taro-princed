<template>
  <view class="index">
    <text>{{ msg }}</text>
    <button @tap="clickHandler">click</button>
    <button @tap="toDetail">to detail</button>
  </view>
</template>

<script>
import './index.scss'
import taro from '@tarojs/taro'

export default {
  data() {
    return {
      msg: 'Hello world!11',
    }
  },
 onPageScroll(e) {
    console.warn("onPageScroll", e);
  },
  onPullDownRefresh() {
    console.warn("onPullDownRefresh");
    this.msg += '!'
    taro.stopPullDownRefresh()
  },
  methods: {
    onPullDownRefresh() {
      alert('refresh')
      this.msg += '!'
      taro.showToast({
        title: '刷新中',
      })
    },
    clickHandler() {
      this.msg += '!'
      taro.startPullDownRefresh()
    },
    toDetail() {
      console.log('===debug=== toDetail: ')
      taro.navigateTo({
        url: '/pages/detail/index',
      })
    },
  },
  onShow() {
    console.log('===debug=== onShow pages/index/index')
  },
}
</script>
