<template>
  <view>
    <view class="index">
      <template>
        <h2>12312093812903</h2>
      </template>
      <template>
        <!-- #ifdef  alipay || weapp || h5  -->
        <view>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis tenetur aspernatur quo inventore omnis
          nulla perferendis illum blanditiis eligendi tempora, recusandae itaque, laboriosam corrupti, ad libero
          voluptate et facilis similique?
        </view>
        <!-- #endif  -->

        <text>{{ msg }}</text>
        <!-- #ifdef  weapp -->
        <view>
          weapp
          <!-- #ifdef  h5 -->
          <view>weapp - h5</view>
          <!-- #else -->
          <view>weapp - not h5</view>
          <!-- #endif  -->

          <!-- #ifdef  weapp -->
          <view> weapp - weapp </view>
          <!-- #endif  -->
        </view>
        <!-- #endif  -->

        <!-- #ifdef  gmu -->
        <view>
          gmu
          <!-- #ifdef  h5 -->
          <view>gmu - h5</view>
          <!-- #else -->
          <view>gmu - not h5</view>
          <!-- #endif  -->

          <!-- #ifdef  gmu -->
          <view> gmu - gmu </view>
          <!-- #endif  -->
        </view>
        <!-- #endif  -->

        <!-- #ifdef  h5 -->
        <view>
          h5
          <!-- #ifdef  weapp -->
          <view> h5 - weapp </view>
          <!-- #endif  -->

          <!-- #ifdef  h5 -->
          <view>h5 - h5</view>
          <!-- #endif  -->
        </view>
        <!-- #endif  -->

        <!-- #ifndef  weapp -->
        <view>ifndef not weapp</view>
        <!-- #else -->
        <view>ifndef is weapp</view>
        <!-- #endif -->

        <!-- #ifndef  h5 -->
        <view>ifndef not h5</view>
        <!-- #else -->
        <view>ifndef not else h5</view>
        <!-- #endif -->

        <!-- #ifndef  h5 || weapp || gmu -->
        <view>ifndef h5 or weapp or gmu</view>
        <!-- #endif -->
      </template>
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
