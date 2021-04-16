# StrictMode

- StrictMode 是一个用来突出显示应用程序中潜在问题的工具
  - 与 Fragment 一样,StrictMode 不会渲染任何可见的 UI
  - 它为其后代元素触发额外的检查和警告
  - 严格模式检查仅在开发模式下运行,它们不会影响生产构建

# 严格模式检查的是什么

- 识别不安全的生命周期(比如过时的生命周期)
- 使用过时的 ref API(字符串 ref)
- 检查意外的副作用

  - 这个组件的 constructor 会被调用两次
  - 这是严格模式下故意进行的操作,让你来查看在这里写的一些逻辑代码被调用多次时,是否会产生一些副作用
  - 在生产环境下,是不会被调用两次的

- 使用废弃的 findDOMNode 方法

  - 在之前的 React API 这种,可以通过 findDOMNode 来获取 DOM,不过已经不推荐使用了,可以自行学习演练一些

- 检测过时的 context API
  - 早期的 Context 是通过 static 属性声明 Context 对象属性,通过 getChildContext 返回 Context 对象等方式来使用 Context 的
  - 目前这种方式已经不推荐使用,可以自行学习了解一下它的用法
