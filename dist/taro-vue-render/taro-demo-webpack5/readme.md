taro@3.6.x在编译过程中，解析template中使用到内置组件，只生成内置组件和模板中用到的组件 （packages/taro-plugin-vue2/src/index.ts）
无法解析render函数中使用到组件，导致使用vant中组件无法正常展示