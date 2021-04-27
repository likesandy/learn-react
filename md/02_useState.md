# useState 解析

- 那么我们来研究一下核心的一段代码代表什么意思
- useState 来自 react，需要从 react 中导入，它是一个 hook
  - 参数：初始化值，如果不设置为 undefined
  - 返回值：数组，包含两个元素
    - 元素一：当前状态的值（第一调用为初始化值）
    - 元素二：设置状态值的函数
- 点击 button 按钮后，会完成两件事情
  - 调用 setCount，设置一个新的值
  - 组件重新渲染，并且根据新的值返回 DOM 结构
- 相信通过上面的一个简单案例，你已经会喜欢上 Hook 的使用了
  - Hook 就是 JavaScript 函数，这个函数可以帮助你 钩入（hook into） React State 以及生命周期等特性
- 但是使用它们会有两个额外的规则
  - 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用
  - 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用

# 认识 useState

- State Hook 的 API 就是 useState，我们在前面已经进行了学习

  - useState 会帮助我们定义一个 state 变量，useState 是一种新方法，它与 class 里面的 this.state 提供的功能完全相同。一般来说，在函数退出后变量就会”消失”，而 state 中的变量会被 React 保留
  - useState 接受唯一一个参数，在第一次组件被调用时使用来作为初始化值。（如果没有传递参数，那么初始化值为
    undefined）
  - useState 接受唯一一个参数，在第一次组件被调用时使用来作为初始化值。（如果没有传递参数，那么初始化值为
    undefined） - [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

- FAQ：为什么叫 useState 而不叫 createState?
  - “Create” 可能不是很准确，因为 state 只在组件首次渲染的时候被创建
  - 在下一次重新渲染时，useState 返回给我们当前的 state
  - 如果每次都创建新的变量，它就不是 “state”了
  - 这也是 Hook 的名字总是以 use 开头的一个原因
- 当然，我们也可以在一个组件中定义多个变量和复杂变量（数组、对象）
