import React, { useLayoutEffect, useState } from "react";

export default function HookUseLayouEffectCounterDemo() {
  const [counter, setCounter] = useState(10);

  useLayoutEffect(() => {
    if (counter === 0) {
      setCounter(Math.random() + 100);
    }
  }, [counter]);

  return (
    <div>
      <h2>数字:{counter}</h2>
      <button onClick={() => setCounter(0)}>修改数字</button>
    </div>
  );
}
