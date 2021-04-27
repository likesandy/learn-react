import React, { useState } from "react";

const HookCounter = () => {
  const arr = useState(0);
  const counter = arr[0];
  const setState = arr[1];
  console.log("函数被重新调用");

  return (
    <div>
      <h2>当前计数:{counter}</h2>
      <button onClick={() => setState(counter + 1)}>+1</button>
      <button onClick={() => setState(counter - 1)}>-1</button>
    </div>
  );
};

export default HookCounter;
