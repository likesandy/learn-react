# useMemo

- useMemo 实际的目的也是为了进行性能的优化
- useCallback 是让返回的函数在依赖变化的时才返回新的值
- useMemo 是让返回的值在依赖变化的时才返回新的值
- 可以理解 useCallback 的底层就是 useMemo
- 可以通过 useMemo 实现 useCallback 的效果
