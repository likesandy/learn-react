# 为什么使用虚拟 DOM

- 为什么要采用虚拟 DOM,而不是直接修改真实的 DOM 喃

  - 很难跟踪状态发生的改变:原有的开发模式,我们很难跟踪到状态发生的改变,不方便针对我们应用程序进行调试
  - 操作真实 DOM 性能较低:传统的开发模式会进行频繁的 DOM 操作,而这一的做法性能非常的低

- DOM 操作性能非常低

  - 首先,document.createElement 本身创建出来的就是一个非常复杂的对象

    - [https://developer.mozilla.org/zh-CN/docs/Web/API/DOcument/createElement](https://developer.mozilla.org/zh-CN/docs/Web/API/DOcument/createElement)

  - 其次,DOM 操作会引起浏览器的回流和重绘,所以在开发中应该避免频繁的进行 DOM 操作

# 频繁操作 DOM 的问题

- 我们举个例子: 比如我们有组数组需要渲染:[0,1,2,3,4]我们会怎么做

  - 我们可以通过 ul 和 li 将它们展示出来

    ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a6d328e30a94c3db37b9713140cfb9c~tplv-k3u1fbpfcp-watermark.image)

- 后来,我们又在增加了 5 条数据:[0,1,2,3,4,5,6,7,8,9]

  - 方式一: 重新遍历整个数组(不推荐)
  - 方式二: 在 ul 后面追加另外 5 个 li

    ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f98a57ad32ef4e7e8d6b3fcaff69798f~tplv-k3u1fbpfcp-watermark.image)

- 上面这段代码的性能怎么样喃?非常低效

  - 因为我通过 document.createElement 创建元素,在通过 ul.appendChild(li)渲染到 DOM 上,进行了多次 DOM 操作
  - 对于批量操作的,最好的办法不是一次次修改 DOM,而是对批量的操作进行合并

- 而我们正是可以通过虚拟 DOM 来帮助我们解决上面的问题

# 声明式编程

- 虚拟 DOM 帮助我们从命令式编程转到了声明式编程的模式

- React 官方的说法: 虚拟 DOM 是一种编程理念

  - 在这个理念中,UI 一种理想化或者说虚拟化的方式保存在内存中,并且它是一个相对简单的 JavaScript 对象
  - 我们可以通过 ReactDOM.render 让虚拟 DOM 和真实 DOM 同步起来,这个过程中叫做协调

- 这种编程的方式赋予了 React 声明式的 API
  - 你只需要告诉 React 希望让 UI 是什么状态
  - React 来确保 DOM 和这些状态是匹配的
  - 你必须要直接进行 DOM 操作,就可以从手动更改 DOM,属性操作,事件处理中解放出来
