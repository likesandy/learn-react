# 认识 craco

- 上面的使用过程是无法对主题进行配置的，好像对主题等相关的高级特性进行配置，需要修改 create-react-app 的默认配置
- 如何修改 create-react-app 的默认配置呢
  - 前面我们讲过，可以通过 yarn run eject 来暴露出来对应的配置信息进行修改
  - 但是对于 webpack 并不熟悉的人来说，直接修改 CRA 的配置是否会给你的项目带来负担，甚至会增加项目的隐患和不稳定
    性呢
  - 所以，在项目开发中是不建议大家直接去修改 CRA 的配置信息的
- 那么如何来进行修改默认配置呢？社区目前有两个比较常见的方案
  - react-app-rewired + customize-cra；（这个是 antd 早期推荐的方案）
  - craco；（目前 antd 推荐的方案）

# Craco 的使用步骤

- 安装 craco
  - `yarn add @craco/craco`
- 修改 package.json 文件
  - 原本启动时，我们是通过 react-scripts 来管理的
  - 现在启动时，我们通过 craco 来管理
- 在根目录下创建 craco.config.js 文件用于修改默认配置

# 配置主题

- 按照 配置主题 的要求，自定义主题需要用到类似 less-loader 提供的 less 变量覆盖功能
  - 我们可以引入 craco-less 来帮助加载 less 样式和修改变量
- 安装 craco-less
  - `yarn add craco-less`
- 修改 craco.config.js 中的 plugins
  - 使用 modifyVars 可以在运行时修改 LESS 变量
- 引入 antd 的样式时，引入 antd.less 文件
  - `import 'antd/dist/antd.less'`
- 修改后重启 yarn start，如果看到一个绿色的按钮就说明配置成功了

# 配置别名

- 在项目开发中，某些组件或者文件的层级会较深
  - 如果我们通过上层目录去引入就会出现这样的情况：../../../../components/button
  - 如果我们可以配置别名，就可以直接从根目录下面开始查找文件：@/components/button，甚至是：components/button
- 配置别名也需要修改 webpack 的配置，当然我们也可以借助于 craco 来完成

> [https://ant.design/docs/react/use-with-create-react-app-cn](https://ant.design/docs/react/use-with-create-react-app-cn)
