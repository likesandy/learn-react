# axios 库的使用

## 前端网络请求的选择

- 目前前端中发送网络请求的方式有很多种

### 选择一 传统的 Ajax 是基于 XMLHttpRequest(XHR)

- 为什么不用它呢?

  - 非常好解释, 配置和调用方式等非常混乱
  - 编码起来看起来就非常蛋疼
  - 所以真实开发中很少直接使用, 而是使用 jQuery-Ajax

### 选择二 在前面的学习中, 我们经常会使用 jQuery-Ajax

- 相对于传统的 Ajax 非常好用
- 为什么不选择它呢？

  - jQuery 整个项目太大，单纯使用 ajax 却要引入整个 JQuery 非常的不合理（采取个性化打包的方案又不能享受 CDN 服务）
  - 基于原生的 XHR 开发，XHR 本身的架构不清晰，已经有了 fetch 的替代方案
  - 尽管 JQuery 对我们前端的开发工作曾有着深远的影响，但是的确正在推出历史舞台

### 选择三 Fetch API

- 选择或者不选择它?
  - Fetch 是 AJAX 的替换方案，基于 Promise 设计，很好的进行了关注分离，有很大一批人喜欢使用 fetch 进行项目开发
  - 但是 Fetch 的缺点也很明显，首先需要明确的是 Fetch 是一个 low-level（底层）的 API，没有帮助你封装好各种各样的功能
    和实现
  - 比如发送网络请求需要自己来配置 Header 的 Content-Type，不会默认携带 cookie 等
  - 比如错误处理相对麻烦（只有网络错误才会 reject，HTTP 状态码 404 或者 500 不会被标记为 reject）
  - 比如不支持取消一个请求，不能查看一个请求的进度等等
  - MDN Fetch 学习地址：https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch

### 选择四 axios

- axios 是目前前端使用非常广泛的网络请求库，包括 Vue 作者也是推荐在 vue 中使用 axios
- 主要特点包括：在浏览器中发送 XMLHttpRequests 请求、在 node.js 中发送 http 请求、支持 Promise API、拦截请求和
  响应、转换请求和响应数据等等
- axios: ajax i/o system

## Axios 的基本使用

- 支持多种请求方式
  - axios(config)
  - axios.request(config)
  - axios.get(url[, config])
  - axios.delete(url[, config])
  - axios.head(url[, config])
  - axios.post(url[, data[, config]])
  - axios.put(url[, data[, config]])
  - axios.patch(url[, data[, config]])
- 如何发送请求呢?
  - 下面的测试我都会使用 httpbin.org 这个网站来测试，是我个人非常喜欢的一个网站

## axios 发送请求

- axios 发送请求
  - 直接通过 axios 函数发送请求
  - 发送 get 请求
  - 发送 post 请求
  - 多个请求的合并
  - 使用 async、await 发送请求
  - axios 函数、get、post 请求本质上都是 request 请求

## axios 的配置信息

- 请求配置选项
- 响应结构信息
- 全局默认配置
- 自定义实例默认配置
  - 优先是请求的 config 参数配置
  - 其次是实例的 default 中的配置
  - 最后是创建实例时的配置

## axios 拦截器

- axios 库有一个非常好用的特性是可以添加拦截器
- 请求拦截器：在发送请求时，请求被拦截
  - 发送网络请求时，在页面中添加一个 loading 组件作为动画
  - 某些网络请求要求用户必须登录，可以在请求中判断是否携带了 token，没有携带 token 直接跳转到 login 页面
  - 对某些请求参数进行序列化
- 响应拦截器：在响应结果中，结果被拦截
  - 响应拦截中可以对结果进行二次处理（比如服务器真正返回的数据其实是在 response 的 data 中）
  - 对于错误信息进行判断，根据不同的状态进行不同的处理

## 二次封装 axios

- 为什么我们要对 axios 进行二次封装呢？
  - 默认情况下我们是可以直接使用 axios 来进行开发的
  - 但是我们考虑一个问题，假如有 100 多处中都直接依赖 axios，突然间有一天 axios 出现了重大 bug，并且该库已经不再维护，
    这个时候你如何处理呢
  - 大多数情况下我们会寻找一个新的网络请求库或者自己进行二次封装
  - 但是有 100 多处都依赖了 axios，方便我们进行修改吗？我们所有依赖 axios 库的地方都需要进行修改
