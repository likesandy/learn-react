# React 开发依赖

- 开发 React 必须依赖三个库

  - react: 包含 react 所必须的核心代码
  - react-dom: react 渲染在不同平台所需要的的核心代码
  - babel: 将 jsx 转换成 React 代码的工具

- 第一次接触 React 会被它繁琐的依赖搞蒙,对于 Vue 来说,我们只是依赖一个 vue.js 文件即可,但是 React 居然要依赖三个库

  - 其实,这三个库是各司其职的,目的就是让每一个库只单纯做自己的事情
  - 在 React 的 0.14 版本之前是没有 react-dom 这个概念的,所有功能都包含在 react 里
  - 为什么要进行拆分喃?原因就是 react-native
  - react 包中包含了 react 和 react-native 所共同拥有的核心代码

- react-dom 针对 web 和 native 所完成的事情不同:
  - web 端: react-dom 会将 jsx 最终渲染到真实的 DOM,显示在浏览器中
  - native 端: react-dom 会将 jsx 最终渲染成原生的控件(比如 Android 的 Button,iOS 中的 UIButton)

# 认识 Babel

- babel 是什么

  - Babel,又名 Babel.js
  - 是目前前端使用非常广泛的编辑器,转移器
  - 比如当下很多浏览器并不支持 ES6 的语法,但是确实 ES6 的语法非常地简洁和方便,我们开发时希望使用它
  - 那么编写很多源码时我们就可以使用 ES6 来编写,之后通过 Babel 工具,将 ES6 转成大多数浏览器都支持的 ES5 的语法

- React 和 Babel 的关系
  - 默认情况下开发 React 其实可以不使用 babel
  - 但是前提是我们自己使用 React,createElement 来编写源代码,它编写的代码非常地繁琐和可读性差
  - 那么我们就可以直接编写 jsx(JavaScript XML)的语法,并且让 babel 帮助我们转换成 React.createElement

# 引入 React 依赖

- 所以,我们在编写 React 代码时,在三个依赖都是必不可少的

  - 那么,如何添加这三个依赖
    - 方式一: 直接 CDN 引入
    - 方式二: 下载后,添加本地依赖
    - 方式三: 通过 npm 管理(后续脚手架再使用)

- 暂时我们直接通过 CDN 引入,来演练下面的示例程序

  - 这里有一个 crossorigin 的属性,这个属性的目的就是为了拿到跨域脚本的错误信息
  - 可以在官网中拿到 CDN 代码 [https://zh-hans.reactjs.org/docs/add-react-to-a-website.html](https://zh-hans.reactjs.org/docs/add-react-to-a-website.html)

    ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ac9925b964ab4fe3b88677a3b4e196c9~tplv-k3u1fbpfcp-watermark.image)

    ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/863d0fff9f174379936ef9a73d6ce5b5~tplv-k3u1fbpfcp-watermark.image)
