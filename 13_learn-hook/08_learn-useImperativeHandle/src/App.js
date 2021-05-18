import React, { memo, useRef, forwardRef, useImperativeHandle } from 'react'

/**
 * useImperativeHandle权限控制
 * 控制父组件通过Ref获得子组件的某个元素的时候只能进行我返回的权限来进行操作
 */

const Home = memo(forwardRef((props, homeRef) => {
  const inputRef = useRef()

  useImperativeHandle(homeRef, () => {
    return {
      myFocus() {
        inputRef.current.focus()
      },
      myValue() {
        inputRef.current.value = 'codertao'
      }
    }
  })

  return (
    <div>
      <h2>Home</h2>
      {/* <input type="text" ref={homeRef} /> */}
      <input type="text" ref={inputRef} />
    </div>
  )
}))

export default memo(function App() {
  const homeRef = useRef()

  function btnClick() {
    // console.log(homeRef);
    // console.log(homeRef.current);
    // homeRef.current.focus()
    // homeRef.current.value = 'codertao'
    homeRef.current.myFocus()
    homeRef.current.myValue()
  }

  return (
    <div>
      <Home ref={homeRef} />
      <hr />
      <h2>App</h2>
      <button onClick={() => { btnClick() }}>获取元素</button>
    </div>
  )
})
