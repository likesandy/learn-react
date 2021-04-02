# JSX 的本质

- 实际上,jsx 仅仅只是 React.createElement(component,props,...children)函数的语法糖

- React.createElement 在源码的什么位置

- createElement 需要传递三个参数

- 参数一: type

  - 当前 ReactElement 的类型
  - 如果是标签元素,那么就使用字符串表示 div
  - 如果是组件元素,那么就直接使用组件的名称

- 参数二: config

  - 所有 jsx 中属性都在 config 中以对象的属性和值的形式存储

- 参数三: children

  - 存放在标签中的内容,以 children 数组的方式进行存储
  - 当然,如果是多个元素喃,React 内部有对它们进行处理

    ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/53b453e5e33d47e586b57d743174b61d~tplv-k3u1fbpfcp-watermark.image)
