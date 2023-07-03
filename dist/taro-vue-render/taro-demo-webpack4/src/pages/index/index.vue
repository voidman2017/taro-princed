<template>
  <view class="index">
    <view>webpack4</view>
    <comp></comp>
    <view class="line">这是测试页面</view>
   <!--  <swiper
      class="test-h"
      indicator-color="#999"
      indicator-active-color="#333"
      :circular="true"
      :indicator-dots="true"
      :autoplay="true"
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
    </swiper> -->
  </view>
</template>

<script>
import comp from '../../components/customerComp/comp.vue'
import './index.scss'
export default {
  components: {
    comp,
  },
}
</script>

