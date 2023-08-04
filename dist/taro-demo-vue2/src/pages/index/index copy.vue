<template>
  <view class="index">
    <text>{{ msg }}</text>
    <button @tap="toMy">toMy</button>
    <swiper
      class="test-h"
      indicator-color="#ccc"
      indicator-active-color="#333"
      :vertical="false"
      :circular="true"
      :indicator-dots="true"
      :autoplay="false"
    >
      <swiper-item>
        <view class="demo-text-1">1</view>
      </swiper-item>
      <swiper-item>
        <view class="demo-text-2">2</view>
      </swiper-item>
      <swiper-item>
        <view class="demo-text-3">3</view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import taro from '@tarojs/taro'

export default {
  data() {
    return {
      msg: 'Hello world!',
    }
  },
  onReady(){
    console.log('onReady',this.data)
  },
  onLoad(){
    console.log('onLoad',this.data)
  },
  methods: {
    toMy: function () {
      console.log(123)
      taro.navigateTo({
        url: '/pages/my/index',
      })
    },
  },
}
</script>
