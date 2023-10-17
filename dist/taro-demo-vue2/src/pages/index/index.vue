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
      msg: 'Hello world!',
    }
  },
  methods: {
    clickHandler() {
      this.msg += '!'
    },
    toDetail() {
      console.log('===debug=== toDetail: ', );
      taro.navigateTo({
        url:'/pages/detail/index'
      })
    },
  },
  onShow() {
    console.log('===debug=== onShow pages/index/index')
  },
}
</script>
