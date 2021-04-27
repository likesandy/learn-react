import React, { useCallback, useState } from "react";

export default function HookUseCallbackDemo1() {
  console.log("重新渲染了HookUseCallbackDemo1");
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(true);

  const add1 = () => {
    console.log("执行了add1函数");
    setCounter(counter + 1);
  };

  const add2 = useCallback(() => {
    console.log("执行了add2函数");
    setCounter(counter + 1);
  }, [counter]);

  return (
    <div>
      <h2>当前计数:{counter}</h2>
      <button onClick={add1}>+1</button>
      <button onClick={add2}>+1</button>
      <button onClick={() => setShow(!show)}>切换</button>
    </div>
  );
}
