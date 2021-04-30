# 认识 CSS in JS

- 实际上，官方文档也有提到过 CSS in JS 这种方案
  - “CSS-in-JS” 是指一种模式，其中 CSS 由 JavaScript 生成而不是在外部文件中定义
  - 注意此功能并不是 React 的一部分，而是由第三方库提供。 React 对样式如何定义并没有明确态度
- 在传统的前端开发中，我们通常会将结构（HTML）、样式（CSS）、逻辑（JavaScript）进行分离

  - 但是在前面的学习中，我们就提到过，React 的思想中认为逻辑本身和 UI 是无法分离的，所以才会有了 JSX 的语法
  - 样式呢？样式也是属于 UI 的一部分
  - 事实上 CSS-in-JS 的模式就是一种将样式（CSS）也写入到 JavaScript 中的方式，并且可以方便的使用 JavaScript 的状态
  - 所以 React 有被人称之为 All in JS

- 当然，这种开发的方式也受到了很多的批评
  - Stop using CSS in JavaScript for web development
  - [https://hackernoon.com/stop-using-css-in-javascript-for-web-development-fa32fb873dcc](https://hackernoon.com/stop-using-css-in-javascript-for-web-development-fa32fb873dcc)
