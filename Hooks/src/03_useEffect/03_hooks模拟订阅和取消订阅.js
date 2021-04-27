import React, { useEffect, useState } from "react";

export default function HookSubscribe() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("订阅了事件");
    return () => {
      console.log("取消了事件");
    };
  }, []);

  return (
    <div>
      <h2>当前计数:{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  );
}
