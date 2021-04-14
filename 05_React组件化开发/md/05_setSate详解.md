# 为什么要使用 setState

- 开发中我们并不能直接通过修改 state 的值来让页面发生更新

  - 因为我们修改了 state 之后,希望 React 根据最新的 State 来重新渲染界面,但是这种方式的修改 React 并不知道数据发生了变化
  - React 并没有实现类似于 Vue2 中的 Object.defineProperty 或者 Vue3 中的 Proxy 的方式来监听数据的变化
  - 我们必须通过 setState 来告知 React 数据已经发生了变化

- 疑惑: 在组件中并没有实现 setState 的方法,为什么可以调用
  - 原因很简单,setState 方法是从 Component 中继承过来的

# setState 异步更新

- setState 的更新是异步的

- 为什么 setState 设计为异步的

  - setState 设计为异步其实之前在 GitHub 上也有很多的讨论
  - React 核心成员(Redux 的作者)也有对应的回复
  - [https://github.com/facebook/react/issues/11527](https://github.com/facebook/react/issues/11527)

- 对回答做一个简单的总结
- setState 设计为异步,可以显著的提升性能

  - 如果每次调用 setState 都进行一次更新,那么意味着 render 函数会被频繁调用,界面重新渲染,这样效率是很低的
  - 最好的方法应该是获取到多个更新,之后进行批量更新

- 如果同步更新了 state,但是还没有执行 render 函数,那么 state 和 props 不能保持同步

# setState 一定是异步的吗

- 其实分为两种情况
  - 在组件生命周期或者 React 合成事件中,setState 是异步的
  - 在 setTimeout 或者原生 dom 事件中,setState 是同步的
