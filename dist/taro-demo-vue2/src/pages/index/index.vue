<template>
  <view class="index">
    <text>{{ msg }}</text>
    <button @click="clickHandler">click</button>
    <button @click="toDetail">to detail</button>
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
