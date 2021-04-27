import React, { useCallback, useState, memo } from "react";

const Son = memo((props) => {
  console.log(`Son函数重新渲染${props.title}`);
  return <button onClick={props.add}>+1</button>;
});

export default function HookUseCallDemo2() {
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
      <Son add={add1} title="btn1" />
      <Son add={add2} title="btn2" />
      <button onClick={() => setShow(!show)}>切换</button>
    </div>
  );
}
