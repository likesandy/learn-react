# useContext 的使用

- 在之前的开发中，我们要在组件中使用共享的 Context 有两种方式
  - 类组件可以通过 类名.contextType = MyContext 方式，在类中获取 context
  - 多个 Context 或者在函数式组件中通过 MyContext.Consumer 方式共享 context
- 但是多个 Context 共享时的方式会存在大量的嵌套
  - Context Hook 允许我们通过 Hook 来直接获取某个 Context 的值
  - 当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重新渲染，并使用最新传递给 MyContext provider
    的 context value 值
