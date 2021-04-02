# Babel 官网查看

- 我们知道默认 jsx 是通过 babel 帮我们进行语法转换的,所以我们之前写的 jsx 代码都需要依赖 babel

- 可以在 babel 的官网中快速查看转换的过程: [https://www.babeljs.cn/](https://www.babeljs.cn/)

# 直接编写 jsx 代码

- 我们自己来编写 React.createElement 代码

  - 我们就没有通过 jsx 来书写了,界面依然是可以正常渲染
  - 另外,在这样的情况下,你还需要 babel 相关的内容吗?不需要了

    - 所以,type='text/babel'可以被我们删掉了
    - 所以,babel 文件我们也可以删掉了

    ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/74234b09cee84278a526a2b69d6eb8ef~tplv-k3u1fbpfcp-watermark.image)
