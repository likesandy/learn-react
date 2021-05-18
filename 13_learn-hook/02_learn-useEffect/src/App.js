import React, { useEffect, useState } from "react";

const Home = () => {
  const [nameState, nameSetState] = useState("codertao");
  const [ageState, ageSetState] = useState(19);

  /**
   * useEffect = componentDidMount + componentDidUpdate + componentWillUnmount
   * state发生改变,UI就会重新渲染,组件就会渲染,里面的函数就会重新执行,先执行
   * useEffect可以多次使用,每个useEffect处理自己的事件,方便进行管理
   */
  useEffect(() => {
    console.log("执行了componentDidMount或者执行了componentDidUpdate");
    return () => {
      console.log("执行了componentWillUnmount");
    };
    // 设置依赖,只有当依赖发生改变时才会重新执行函数
  }, []);

  useEffect(() => {
    console.log("修改了DOM");
  });

  useEffect(() => {
    console.log("注册了监听");
    return () => {
      console.log("移除了监听");
    };
  });

  useEffect(() => {
    console.log("发送了网络请求");
  });

  return (
    <div>
      <h2>{nameState}</h2>
      <button onClick={() => nameSetState("sandy")}>修改name</button>
      <h2>{ageState}</h2>
      <button onClick={() => ageSetState(ageState + 1)}>+1</button>
      <button onClick={() => ageSetState(ageState - 1)}>-1</button>
    </div>
  );
};

const App = () => {
  const [isShowState, isShowSetState] = useState(true);
  return (
    <div>
      {isShowState && <Home />}
      <hr />
      <button onClick={() => isShowSetState(!isShowState)}>切换组件</button>
    </div>
  );
};

export default App;
