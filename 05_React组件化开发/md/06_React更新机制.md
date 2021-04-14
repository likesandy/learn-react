# React 更新机制

- 前面已经学习了 React 的渲染机制

  - JSX -> 虚拟 DOM -> 真实 DOM

- 那么 React 的更新流程喃
  - props/state 改变-> render 函数重新执行 -> 产生新的 DOM 树 -> 新旧 DOM 树进行 diff 算法优化 -> 计算出差异进行更新 -> 更新到真实的 DOM

# React 的更新流程

- React 在 props 或 state 发生改变时,会调用 React 的 render 方法,会创建一颗不同的树

- React 基于这两颗不同的树之间的差别来判断如何有效的更新 UI

  - 如果一棵树参考另外一棵树进行完全比较更新,那么即使是最先进的算法,该算法的复杂程度都是非常高的
  - 如果 React 中使用了最先进的算法,那么展示 1000 个元素所需要执行的计算量可能高达十亿的量级范围
  - 这个开销未免太过昂贵了,React 的更新性能也会变得非常低效

- 于是,React 使用了 diff 算法进行了优化
  - 同层节点之间相互比较,不会垮节点比较
  - 不同类型的节点,会产生不同的树结构
  - 开发中,可以通过 key 来指定那些节点在不同的渲染下保持稳定

## 情况一: 对比不同的类型的元素

- 当节点为不同的元素,React 会拆卸原有的树,并且建立起新的树

  - 当一个元素从<a>变成<img>,从<Article>变成<Comment>,或从<Button>变成<div>都会触发一个完整重建流程
  - 当卸载一棵树时,对应的 DOM 节点也会被销毁,组件实例将执行 componentWillUnmount()方法
  - 当建立一颗新的树时,对应的 DOM 节点会被创建以及插入到 DOM 中,组件实例将会执行 componentWillMount()方法,静跟着 componentDidMount()方法

- 比如下面代码的更改

  - React 会销毁 Counter 组件并且重新装载一个新的组件,而不会对 Counter 进行复用

  ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e82e04ccf904ac992d8f7bba01d11fc~tplv-k3u1fbpfcp-watermark.image)

## 情况二: 对比同一类型的元素

- 当比对两个相同的类型的 React 元素时,React 会保留 DOM 节点,仅比对及更新有改变的属性
- 比如下面两个代码的更改

  - 通过对比这两个元素,React 知道只需要修改 DOM 元素上的 className 属性

    ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e32ebe53e0f7487f9a69d2bee6c2c199~tplv-k3u1fbpfcp-watermark.image)

- 比如下面的代码更改

  - 当更改 style 属性时,React 仅更新有所更变的属性
  - 通过比对这两个元素,React 知道只需要修改 DOM 元素上 color 样式,无需修改 fontWeight

    ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3916ec1cba5e49548762e663fe7dffa3~tplv-k3u1fbpfcp-watermark.image)

- 如果是同类型的组件元素
  - 组件会保持不变,React 会更新该组件的 props,并且调用 componentWillReceiveProps()和 componentWillUpdate()方法
  - 下一步,调用 render()方法,diff 算法将在之前的结果以及新的结果中进行递归

## 情况三: 对子节点进行递归

- 在默认情况下,当递归 DOM 节点的子元素时,React 会同时遍历两个子元素的列表;当产生差异时,生成一个 mutation

  - 我们来看一下在最后插入一条数据的情况
  - 前面两个比较是完全相同的,所以不会产生 mutation
  - 最后一个比较,产生一个 mutation,将其插入到新的 DOM 树中即可

    ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/970ca76fda624eaaaf10ec0803bc0c85~tplv-k3u1fbpfcp-watermark.image)

- 但是如果我们是在中间插入一条数据

  - React 会对每一个子元素产生一个 mutation,而不是保持<li>星际穿越</li>和<li>盗梦空间</li>的不变
  - 这种低效的比较方式会带来一定的性能问题

    ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5c5c68afac2449c68be213ad06dc083f~tplv-k3u1fbpfcp-watermark.image)
