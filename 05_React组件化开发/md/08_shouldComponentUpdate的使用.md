# render 函数被调用

- 我们使用之前的一个嵌套案例

  - 在 App 中,我们增加了一个计数器的代码
  - 当点击+1 时,会重新调用 App 的 render 函数
  - 而当 App 的 render 函数被调用时,所以的子组件的 render 函数都会被重新调用

- 那么,我们可以思考一下,在以后的开发中,我们只要修改了 App 中的数据,所有的组件都需要重新 render,进行 diff 算法,性能必然是很低的

  - 事实上,很多的组件没有必须要重新 render
  - 它们调用 render 应该有一个前提,就是依赖的数据(state,props)发生改变时,再调用自己的 render 方法

- 如何来控制 render 方法是否被调用的
  - 通过 shouldComponentUpdate 方法即可

# shouldComponentUpdate

- React 给我们提供了一个生命周期方法 shouldComponentUpdate(简称 SCU),这个方法接受参数,并且需要有返回值
- 该方法有两个参数

  - 参数一: nextProps 修改之后,最新的 props 属性
  - 参数二: nextState 修改之后,最新的 state 属性

- 该方法返回值是一个 boolean 类型

  - 返回值为 true,那么就需要调用 render 方法
  - 返回值为 false,那么就不需要调用 render 方法
  - 默认返回的是 true,也就是只要 state 发生改变,就会调用 render 方法

- 比如我们在 App 中增加一个 message 属性
  - jsx 中并没有依赖这个 message,那么它的改变不应该引起重新渲染
  - 但是因为 render 监听到 state 的改变,就会重新 render,所以最后 render 方法还是被重新调用了
