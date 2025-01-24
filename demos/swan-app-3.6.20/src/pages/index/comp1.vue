<template>
  <view class="com1">
    <text>{{ message }}</text>
    <button @tap="increment">点击次数: {{ count }}</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      message: '这是一个Vue2组件',
      count: 0,
    }
  },
  methods: {
    increment() {
      this.count++
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
