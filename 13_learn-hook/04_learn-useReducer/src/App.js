import React, { useReducer, useState } from "react";

// 不同的useState保存的状态是相互独立的

/**
 * useReducer是useState的一种替代方案,专门用于复用数据(逻辑类似于reducer)
 * 接收两个参数
 *  第一个参数: 处理数据的函数(reducer)
 *  第二个参数: 默认值
 * 返回一个数组
 *  第一个元素: state
 *  第二个元素: dispatch
 */

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, num: state.num + 1 };
    case "SUB":
      return { ...state, num: state.num - 1 };
    default:
      return state;
  }
}

const Home = () => {
  const [state, dispatch] = useReducer(reducer, { num: 0 });

  return (
    <div>
      <h2>当前计数:{state.num}</h2>
      <button onClick={() => dispatch({ type: "ADD" })}>+1</button>
      <button onClick={() => dispatch({ type: "SUB" })}>-1</button>
    </div>
  );
};
const App = () => {
  const [numState, setNumState] = useState(0);

  function increment() {
    setNumState(numState + 1);
  }
  function decrement() {
    setNumState(numState - 1);
  }

  return (
    <div>
      <h2>当前计数:{numState}</h2>
      <button onClick={() => { increment() }}>+1</button>
      <button onClick={() => { decrement() }}>-1</button>
      <hr />
      <Home />
    </div >
  );
};

export default App;
