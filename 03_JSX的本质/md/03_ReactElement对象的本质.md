# 虚拟 DOM 的创建过程

- 我们通过 React.createElement 最终创建出来一个 ReactElement 对象

  ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/23397710b001435180a32280cc9fd57b~tplv-k3u1fbpfcp-watermark.image)

- 这个 ReactElement 对象是什么作用喃?React 为什么要创建它

  - 原因是 React 利用 ReactElement 对象组成了一个 JavaScript 的对象树
  - JavaScript 的对象树就是大名鼎鼎的虚拟 DOM

- 而 ReactElement 最终形成的树结构就是虚拟 DOM

# jsx - 虚拟 DOM - 真实 DOM

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6b346c276d5449a985bc308aff264a0b~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1f01bb5b7ed2452a99e3a313b532c442~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b207948bc71341d9bde2d2415115d16c~tplv-k3u1fbpfcp-watermark.image)
