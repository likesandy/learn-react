# 认识 Effect Hook

- 目前我们已经通过 hook 在函数式组件中定义 state，那么类似于生命周期这些呢
  - Effect Hook 可以让你来完成一些类似于 class 中生命周期的功能
  - 事实上，类似于网络请求、手动更新 DOM、一些事件的监听，都是 React 更新 DOM 的一些副作用（Side Effects）
  - 所以对于完成这些功能的 Hook 被称之为 Effect Hook
- useEffect 的解析
  - 通过 useEffect 的 Hook，可以告诉 React 需要在渲染后执行某些操作
  - useEffect 要求我们传入一个回调函数，在 React 执行完更新 DOM 操作之后，就会回调这个函数
  - 默认情况下，无论是第一次渲染之后，还是每次更新之后，都会执行这个 回调函数

# 需要清除 Effect

- 在 class 组件的编写过程中，某些副作用的代码，我们需要在 componentWillUnmount 中进行清除
  - 比如我们之前的事件总线或 Redux 中手动调用 subscribe
  - 都需要在 componentWillUnmount 有对应的取消订阅
  - Effect Hook 通过什么方式来模拟 componentWillUnmount 呢
- useEffect 传入的回调函数 A 本身可以有一个返回值，这个返回值是另外一个回调函数 B：
- 为什么要在 effect 中返回一个函数
  - 这是 effect 可选的清除机制。每个 effect 都可以返回一个清除函数
  - 如此可以将添加和移除订阅的逻辑放在一起
  - 它们都属于 effect 的一部分
- React 何时清除 effect
  - React 会在组件更新和卸载的时候执行清除操作
  - 正如之前学到的，effect 在每次渲染的时候都会执行

# 使用多个 Effect

- 使用 Hook 的其中一个目的就是解决 class 中生命周期经常将很多的逻辑放在一起的问题
  - 比如网络请求、事件监听、手动修改 DOM，这些往往都会放在 componentDidMount 中
- 使用 Effect Hook，我们可以将它们分离到不同的 useEffect 中
- Hook 允许我们按照代码的用途分离它们， 而不是像生命周期函数那样
  - React 将按照 effect 声明的顺序依次调用组件中的每一个 effect

# Effect 性能优化

- 默认情况下，useEffect 的回调函数会在每次渲染时都重新执行，但是这会导致两个问题
  - 某些代码我们只是希望执行一次即可，类似于 componentDidMount 和 componentWillUnmount 中完成的事情；（比如网
    络请求、订阅和取消订阅）
  - 另外，多次执行也会导致一定的性能问题
- 我们如何决定 useEffect 在什么时候应该执行和什么时候不应该执行呢
  - useEffect 实际上有两个参数
  - 参数一：执行的回调函数
  - 参数二：该 useEffect 在哪些 state 发生变化时，才重新执行；（受谁的影响）
- 但是，如果一个函数我们不希望依赖任何的内容时，也可以传入一个空的数组 []
  - 那么这里的两个回调函数分别对应的就是 componentDidMount 和 componentWillUnmount 生命周期函数了
