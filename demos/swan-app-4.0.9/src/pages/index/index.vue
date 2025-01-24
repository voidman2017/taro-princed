<template>
  <view class="index">
    <text>{{ msg }}xxxx</text>
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
    <comp1 />
  </view>
</template>

<script>
import { ref } from 'vue'
import './index.scss'
import comp1 from './comp1.vue'

export default {
  components: {
    comp1,
  },
  setup() {
    const msg = ref('Hello world')
    const count = ref(1)
    return {
      msg,
      count,
    }
  },
}
</script>
