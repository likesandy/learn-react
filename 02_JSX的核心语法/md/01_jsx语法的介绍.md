# 认识 JSX

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/140fe5b2a72c4637b5b66ac0d55615ac~tplv-k3u1fbpfcp-watermark.image)

- 这段 Element 变量的声明右侧赋值的标签语法是什么?

- 它不是一段字符串(因为没有使用引号包裹),它看起来是一段 HTML 原生,但是我们能在 js 中直接给一个变量赋值 html 吗
- 其实是不可以的,如果我们将 type="text/babel''去除掉,那么就会出现语法错误
- 它到底是什么喃?其实它是一段 jsx 的语法

- JSX 是什么
  - jsx 是一种 JavaScript 的语法扩展,也在很多地方称之为 JavaScript XML,因为看起就是一段 XML 语法
  - 它用于描述我们的 UI 界面,并且其完成可以和 JavaScript 融合在一起使用
  - 它不同于 Vue 中的模板语法,你不需要专门学习模板语法中的一些指令(比如 v-for,v-if,v-else,v-bind)

# 为什么 React 选择了 JSX

- React 认为渲染逻辑本质上与其他 UI 逻辑存在内在耦合

  - 比如 UI 需要绑定事件(button,a 原生等等)
  - 比如 UI 中需要展示数据状态,在某些状态发生改变时,又需要改变 UI

- 它们之间是密不可分的,所以 React 没有讲标记分离到不同的文件中,而是将它们组合到了一起,这个地方就是组件
  - React 的核心思想就是 all in js
  - 当然,后面我们还是会继续学习更多组件相关的东西
- 在这里,我们只需要知道,jsx 其实是嵌入到 JavaScript 中的一种结构语法

- jsx 的书写规范
  - jsx 的顶层只能有一个根元素,所以我们很多时候会在外层包裹一个 div 元素(或者使用 Fragment)
  - 为了方便阅读,我们通常在 jsx 的外层包裹一个小括号(),这样可以方便阅读,并且 jsx 可以进行换行书写
  - jsx 中的标签可以是单标签,也可以是双标签
    - 如果是单标签,必须以/>结尾
