# 认识 styled-components

- 批评声音虽然有，但是在我们看来很多优秀的 CSS-in-JS 的库依然非常强大、方便
  - CSS-in-JS 通过 JavaScript 来为 CSS 赋予一些能力，包括类似于 CSS 预处理器一样的样式嵌套、函数定义、逻辑复用、动态修
    改状态等等
  - 依然 CSS 预处理器也具备某些能力，但是获取动态状态依然是一个不好处理的点
  - 所以，目前可以说 CSS-in-JS 是 React 编写 CSS 最为受欢迎的一种解决方案
- 目前比较流行的 CSS-in-JS 的库有哪些呢
  - styled-components
  - emotion
  - glamorous
- 目前可以说 styled-components 依然是社区最流行的 CSS-in-JS 库，所以我们以 styled-components 的讲解为主
  - 安装 styled-components
    `yarn add styled-components`

# ES6 标签模板字符串

- ES6 中增加了模板字符串的语法，这个对于很多人来说都会使用
- 但是模板字符串还有另外一种用法：标签模板字符串
- 我们一起来看一个普通的 JavaScript 的函数
- 正常情况下，我们都是通过 函数名() 方式来进行调用的，其实函数还有另外
  一种调用方式

  ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ce2fdecc5356455d8ce524f4cfb5b8be~tplv-k3u1fbpfcp-watermark.image)

- 如果我们在调用的时候插入其他的变量
  - 模板字符串被拆分了
  - 第一个元素是数组，是被模块字符串拆分的字符串组合
  - 后面的元素是一个个模块字符串传入的内容
- 在 styled component 中，就是通过这种方式来解析模块字符串，最终生成
  我们想要的样式的

# styled 的基本使用

- styled-components 的本质是通过函数的调
  用，最终创建出一个组件
  - 这个组件会被自动添加上一个不重复的
    class
  - styled-components 会给该 class 添加相
    关的样式
- 另外，它支持类似于 CSS 预处理器一样的样
  式嵌套
  - 支持直接子代选择器或后代选择器，并且
    直接编写样式
  - 可以通过&符号获取当前元素
  - 直接伪类选择器、伪元素等

# props、attrs 属性

- props 可以穿透
- props 可以被传递给 styled 组件
  - 获取 props 需要通过${}传入一个插值函数，props 会作为该函数的参数
  - 这种方式可以有效的解决动态样式的问题
