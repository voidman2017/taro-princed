<template>
  <view class="index">
    <text>{{ msg }} xxx</text>
    <button @tap="count++">{{ count }}</button>
    <swiper>
      <swiper-item>
        <view>1</view>
      </swiper-item>
      <swiper-item>
        <view>2</view>
      </swiper-item>
      <swiper-item>
        <view>3</view>
      </swiper-item>
    </swiper>
    <comp1/>
  </view>
</template>
<script>
import './index.scss'
import comp1 from './comp1.vue'
export default {
  components: {
    comp1,
  },
  data() {
    return {
      msg: 'Hello world!',
      count: 1,
    }
  },
}
</script>
