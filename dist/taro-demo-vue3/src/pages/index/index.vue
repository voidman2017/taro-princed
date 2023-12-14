<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import { ref } from 'vue'
import './index.scss'
import taro from '@tarojs/taro'

export default {
  setup() {
    const msg = ref('Hello world')
    return {
      msg,
    }
  },
  onPullDownRefresh() {
    console.warn('onPullDownRefresh')
    this.msg += '!'
    taro.stopPullDownRefresh()
  },
}
</script>
