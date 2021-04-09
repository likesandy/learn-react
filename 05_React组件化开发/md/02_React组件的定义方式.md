# 类组件

- 类组件的定义有如下要求

  - 组件的名称是大写字符开发(无论是类组件还是函数组件)
  - 补充(HTML 中标签是不区分大小写的,而在 JSX 中标签是区分大小写的,当标签首字母为大写,JSX 会把这个标签当做组件)
  - 类组件必须实现 render 函数

- 在 ES6 之前,可以通过 create-react-class 模块来定义类组件,但是目前官网建议我们通过 ES6 的 class 类定义
- 使用 class 定义一个组件
  - constructor 是可选的,我们通常在 constructor 中初始化一些数据
  - this,state 中维护的就是我们组件内部的数据
  - render()方法是 class 组件中唯一必须实现的方法

# 函数组件

- 函数组件是使用 function 来进行定义的函数,只是这个函数会返回和类组件中 render 函数返回一样的内容
- 函数组件有自己的特点
  - 没有生命周期,也会被更新并挂载,但是没有生命周期函数
  - 没有 this(组件实例)
  - 没有内部状态(state)

# render 函数的返回值

- 当 render 被调用时,它会检查 this.props 和 this.state 的变化并返回以下类型之一
- React 元素
  - 通常通过 JSX 创建
  - 例如,<div/>会被 React 渲染成 DOM 节点,<Mydiv/>会被 React 渲染为自定义组件
  - 无论是<div/>还是<Mydiv/>均为 React 元素
- 数组或 fragments:使得 render 方法可以返回多个元素
- Protals:可以渲染子节点到不同的 DOM 子树中
- 字符串或数值类型:它们在 DOM 中会被渲染成文本节点
- 布尔类型或 null:什么都不渲染
