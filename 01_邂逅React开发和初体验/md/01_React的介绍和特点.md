# React是什么?

* React是什么喃?相信每个做开发的人对它都或多或少有一些印象
  * 这里我们来看一下官方对它的解释: 用于构建用户界面的JavaScript库

* 我们知道对于前端来说,主要的任务就是构建用户界面,而构建用户界面离不开三个技术
  * HTML: 构建页面的结构
  * CSS: 构建页面的样式
  * JAvaScript: 页面动态内容和交互

* 那么使用最原生的HTML,CSS,JavaScript可以构建完整的用户界面吗?当然可以,但是会存在很多问题
  * 比如操作DOM兼容性的问题
  * 比如过多兼容性代码的冗余问题
  * 比如代码组织和规范的问题

# 常见的JavaScript库

* 所以,一直以来前端开发人员都在需求可以让自己开发更方便的JavaScript库
  * 在过去的很长时间内,JQuery是被使用最多的JavaScript库
  * 在过去的一份调查中显示,全球前10000个访问最高的网站中,有65%使用了JQuery,是当时最受欢迎的JavaScript库
  * 但是越来越多的公司开始慢慢不再使用JQuery,包括程序员使用最多的GitHub

* 现在前端领域最为流行的是三大框架
  * Vue
  * React
  * Angular

* 而Angelar在国内并不是特别受欢迎

* 根据调查2020年度开发者调查来看React是年度前端框架
  
    ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/72d1b4f10edb4f74be7c60b09571e790~tplv-k3u1fbpfcp-watermark.image)

# React的起源

* React是2013年,Facebook开源的JavaScript框架,那么当时为什么Facebook要推出这样的一款框架

* 这个源于一个需求,所产生的bug

    ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/35c8549e408f4b9881f8038afe71c505~tplv-k3u1fbpfcp-watermark.image)
    * 该功能上线之后,总是出现bug
    * 三个消息的数字在发生变化时,过多的操作很容易产生bug

* bug是否可以修复?当然可以修复,但是Facebook的工程师并不满足于此
  * 他们开始思考为什么会产生这样的问题
  * 在传统的开发模式中,我们过多的去操作界面的细节
    * 而且需要掌握和使用大量DOM的API,当然我们可以通过JQuery来简化和适配一些API的使用
  
  * 另外关于数据(状态),往往会分散到各个地方,不方便管理和维护

* 他们就去思考,是否有一种新的模式来解决上面的问题
  * 以组件对的方式来划分一个个功能模块
  * 组件内以jsx来描述UI的样子,以state来存储组件内的状态
  * 当应用的状态发生改变时,通过setState来修改状态,状态发生变化时,UI会自动发生更新


# React的特点

* 声明式编程
  * 声明式编程是目前整个大前端开发的模式: Vue,React,Flutter,SwiftUI
  * 它允许我们只需要维护自己的状态,当状态改变时,React可以根据最新的状态去渲染我们的UI界面
      
    ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e55731dd86f5484aadd46becbe217c35~tplv-k3u1fbpfcp-watermark.image)

* 组件化开发
  * 组件化开发页面是目前前端的流行趋势,我们会把复杂的界面拆分成一个个小的组件
  
    ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c19c269ffb9742f1bb759b0f3f2d5028~tplv-k3u1fbpfcp-watermark.image)

* 多平台适配
  * 2013年,React发布之初主要是开发Web界面
  * 2015年,Facebook推出了ReactNative,用于开发移动端平台
  * 2017年,Facebook推出ReactVR,用于开发虚拟现实Web应用程序
  
    ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d94734a842544bd9aa2e6a4d1502cce7~tplv-k3u1fbpfcp-watermark.image)

# 掌握最先进的思想和技术

* React由Facebook来更新和维护,它是大量优秀程序员的思想结晶
  * React1的流行不仅仅局限于普通开发工程师对它的认可,大量流行的其他框架借鉴React的思想

* Vue.js框架设计之初,有很多的灵感来自Angelar和React

* 包括Vue3很多新的特性,也是借鉴和学习了React1
  * 比如React Hooks是开创性的新功能
  * Vue Function Based API学习了React Hooks的思想
