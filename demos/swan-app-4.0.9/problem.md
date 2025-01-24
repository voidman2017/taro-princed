![1737702052682](image/problem/1737702052682.png)


需要在 tmpl_0_8 的第一层view之后，添加一层 `<block s-for="i.cn trackBy item.sid"> </block>`

之前尝试在![1737702163331](image/problem/1737702163331.png)

buildFlatternView中添加一层 ，会导致引入组件的情况下会有问题
