<template>
  <view class="index">
    <text>{{ msg }}</text>
    <button @tap="clickHandler"> click </button>
  </view>
</template>

<script>
import './index.scss'

export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  },
  methods:{
    clickHandler(){
      this.msg += '!'
    }
  }
}
</script>
