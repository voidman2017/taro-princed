import Vue from 'vue'
import './app.scss'
import Taro from '@tarojs/taro'
Taro.options.debug = true
const App = {
  onShow (options) {
    console.log('App onShow.')
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
}

export default App
