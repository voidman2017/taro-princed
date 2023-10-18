<template>
  <view>
    <view class="index">
      <text>{{ msg }}</text>
      <!-- #ifdef  weapp -->
      <view>
        weapp
        <!-- #ifdef  h5 -->
        <view>weapp - h5</view>
        <!-- #endif  -->

        <!-- #ifdef  weapp -->
        <view> weapp - weapp </view>
        <!-- #endif  -->
      </view>
      <!-- #endif  -->

      <!-- #ifdef  h5 -->
      <view>
        h5
        <!-- #ifdef  weapp -->
        <view> weapp - weapp </view>
        <!-- #endif  -->

        <!-- #ifdef  h5 -->
        <view>weapp - h5</view>
        <!-- #endif  -->
      </view>
      <!-- #endif  -->
      <button @tap="clickHandler">click</button>
      <button @tap="toDetail">to detail</button>
    </view>
  </view>
</template>


<script>
import './index.scss'
import taro from '@tarojs/taro'

export default {
  data() {
    return {
      msg: 'Hello world!',
    }
  },
  methods: {
    clickHandler() {
      this.msg += '!'
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
