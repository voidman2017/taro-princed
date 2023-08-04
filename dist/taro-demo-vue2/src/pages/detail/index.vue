<template>
  <view class="index">
    <text>page detail</text>
    <button @tap="clickHandler">click</button>
  </view>
</template>

<script>
import './index.scss'
import Taro from '@tarojs/taro'
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
  },
  onShow() {
    console.log('===debug=== onShow pages/detail/index')
     Taro.showModal({
      title:'12312'
    })
  },
  destroyed() {
   
    console.log('===debug=== destroyed pages/detail/index')
  },
}
</script>
