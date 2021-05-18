import React, { createRef, memo, PureComponent, useRef, useState, useEffect } from 'react'

/**
 * useRef = createRef + state
 * useRef中保存的数据,除非手动修改,否则永远不会发生改变
 */

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  }
}

export default memo(function App() {
  const hRef = createRef()
  const homeRef = useRef()
  const [countState, setCountState] = useState(0)
  const num = useRef(0) // {current: 0}

  function getElement() {
    console.log(hRef.current);
    console.log(homeRef.current);
  }

  useEffect(() => {
    num.current = countState
  }, [countState]);

  return (
    <div>
      <Home ref={homeRef} />
      <hr />
      <h2 ref={hRef}>App</h2>
      <button onClick={() => { getElement() }}>获取元素</button>
      <h2>上一次的值:{num.current}</h2>
      <h2>当前的值:{countState}</h2>
      <button onClick={() => { setCountState(countState + 1) }}>+1</button>
    </div>
  )
})
