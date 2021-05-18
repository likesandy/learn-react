import React, { useState, memo, useCallback } from "react";

/**
 * useCallback用于优化代码,可以让对应的函数只有在依赖发生变化的时候才重新定义
 * 当前Home组件和About组件重新渲染的原因是因为
 * App组件中的数据发生了改变,App组件就会重新渲染
 * App组件重新渲染,就会重新定义执行App组件中的代码
 * 既然increment和decrement是重新定义的,那么传递给子组件的方法就不是之前的方法了
 * 既然不是同一个方法,所以Home和About接收到的内容就和上一次接收到的内容不一样了
 * 既然接收到的内容不一样,组件就会重新渲染
 */

const Home = memo((props) => {
  console.log("Home组件渲染成功");

  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => { props.increment() }}>+1</button>
    </div>
  );
});


const About = memo((props) => {
  console.log("About组件渲染成功");

  return (
    <div>
      <h2>About</h2>
      <button onClick={() => { props.decrement() }}>-1</button>
    </div>
  );
});

const App = () => {
  console.log("App组件渲染成功");

  const [countState, setCountState] = useState(0);

  function increment() {
    setCountState(countState + 1);
  }

  // function decrement() {
  //   setCountState(countState - 1);
  // }

  // 依赖数组中的值,只要数组中的值不发生变化,那么decrement函数就不会重新定义
  const decrement = useCallback(() => {
    setCountState(countState - 1)
  }, [])

  return (
    <div>
      <h2>App</h2>
      <h2>当前计数:{countState}</h2>
      <button onClick={() => { increment() }} >  +1 </button>
      <button onClick={() => { decrement() }}>-1</button>
      <hr />
      <Home increment={increment} />
      <hr />
      <About decrement={decrement} />
    </div >
  );
};

export default App;
