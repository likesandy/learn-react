# keys 的优化

- 我们前面在遍历列表时,总是会提示一个警告,让我们加入一个 key 属性

- 方式一: 在最后位置插入数据

  - 这种情况,有无 key 意义都不大

- 方式二: 在前面插入数据

  - 这种做法,在没有 key 的情况下,所有的 li 都需要进行修改

- 当子元素(这里的 li)拥有 key 时,React 使用 key 来匹配原来树上的子元素以及最新树上的子元素

  - 在下面这种场景下,key 为 111 和 222 的元素仅仅进行位移,不需要进行任何的修改
  - 将 key 为 333 的元素插入到最前面的位置即可

- key 的注意事项
  - key 应该是唯一的
  - key 不要使用随机数(随机数在下一次 render 时,会重新生成一个数字)
  - 使用 index 作为 key,对性能是没有优化的
