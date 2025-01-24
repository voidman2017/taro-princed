<template>
  <view class="com1">
    <text>{{ message }}</text>
    <button @tap="increment">点击次数: {{ count }}</button>
  </view>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const message = ref('这是一个Vue3组件')
    const count = ref(0)

    const increment = () => {
      count.value++
    }

    return {
      message,
      count,
      increment,
    }
  },
}
</script>

<style scoped>
.com1 {
  padding: 20px;
  text-align: center;
}
</style>
