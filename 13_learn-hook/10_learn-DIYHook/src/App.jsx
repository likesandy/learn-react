import React, { memo, useEffect, useState } from 'react'

/**
 * 在React中只有在函数式组件中和自定义Hook中才可以使用Hook
 * 只需要在普通的函数前面加上use,那么就表示函数是自定义Hook,就可以在这个函数中使用其他的Hook
 * 在jsx文件中可以不需要添加use也可以使用Hook,这应该算是特性吧,我也是第一次使用jsx来编写
 * 但是官方建议自定义hook必须在函数前面加上use
 * 题外话(vite是真爽,这次项目是vite快速搭建的)
 * 在开发中,但凡需要抽取代码,但凡被抽取的代码中用到了其它的Hook,那么就必须把这些代码抽取到自定义Hook中
 */

function useaddListenr(name) {
  useEffect(() => {
    console.log(name + ' - 组件被挂载或者更新完成 - 添加监听事件');
    return () => {
      console.log(name + ' - 组件被挂载或者更新完成 - 移除监听事件');
    }
  })
}

const Home = memo(() => {
  useaddListenr('Home')
  /*
  useEffect(() => {
    console.log('Home - 组件被挂载或者更新完成 - 添加监听事件');
    return () => {
      console.log('Home - 组件被挂载或者更新完成 - 移除监听事件');
    }
  })
  */

  return (
    <div>
      <h2>Home</h2>
    </div>
  )
})

const About = memo(() => {
  useaddListenr('About')

  /*
  useEffect(() => {
    console.log('About - 组件被挂载或者更新完成 - 添加监听事件');
    return () => {
      console.log('About - 组件被挂载或者更新完成 - 移除监听事件');
    }
  })
  */

  return (
    <div>
      <h2>About</h2>
    </div>
  )
})

export default memo(function App() {
  const [isShowState, setIsShowState] = useState(true)

  return (
    <div>
      {isShowState && <Home />}
      {isShowState && <About />}
      <button onClick={() => { setIsShowState(!isShowState) }}>切换</button>
    </div>
  )
})
