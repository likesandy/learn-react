# useCallback

- useCallback 实际的目的是为了进行性能的优化。
- 如何进行性能的优化呢
  - useCallback 会返回一个函数的 memoized（记忆的） 值
  - 在依赖不变的情况下，多次定义的时候，返回的值是相同的
- 通常使用 useCallback 的目的是不希望子组件进行多次渲染，并不是为了函数进行缓存
