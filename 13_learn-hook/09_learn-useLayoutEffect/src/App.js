import React, { memo, useState, useEffect, useLayoutEffect, useRef } from 'react'

/**
 *  useLayoutEffect执行回调会比 useEffect先执行
 *  useEffect:同步
 *  useLayoutEffect:异步
 *  应用场景: 只有在需要组件挂载之后更新DOM的布局和样式的时候才使用useLayoutEffect
 *  为什么要使用useLayoutEffect来更新DOM布局和样式?
 *  useEffect是组件已经渲染到屏幕上才执行
 *  useLayoutEffect是组件还没有渲染到屏幕上就会执行
 *  如果在组件已经渲染到屏幕上了,才去更新DOM的布局和样式,用户的体验不好,会看到闪屏的情况
 *  如果在组件还没有渲染到屏幕上,就去更新DOM的布局和样式,用户的体验就很好,就看不到闪屏的情况
 */

const Home = memo(() => {
  const hRef = useRef()

  // useEffect(() => {
  //   hRef.current.style.left = '0'
  //   hRef.current.style.left = '300px'
  //   // console.log('组件被挂载或者更新完成-useEffect');
  //   return () => {
  //     console.log('组件即将被卸载-useEffect');
  //   };
  // });

  useLayoutEffect(() => {
    hRef.current.style.left = '0'
    hRef.current.style.left = '300px'
    console.log('组件被挂载或者更新完成-useLayoutEffect');
    return () => {
      console.log('组件即将被卸载-useLayoutEffect');
    };
  });

  return (
    <div>
      <h2 style={{ backgroundColor: 'red', width: '100px', height: '100px', position: 'relative' }} ref={hRef}> </h2>
    </div>
  )
})


export default memo(function App() {
  const [isShowState, setIsShowState] = useState(true)

  return (
    <div>
      {isShowState && <Home />}
      <button onClick={() => { setIsShowState(!isShowState) }}>切换</button>
    </div>
  )
})

