import React, { useEffect, useRef, useState } from "react";

export default function HookUseRefDemo2() {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(counter);

  // useRef中保存的数据,除非手动修改,否则永远都不会发生变化
  useEffect(() => {
    counterRef.current = counter;
  }, [counter]);

  return (
    <div>
      <h2>上一次的值:{counterRef.current}</h2>
      <h2>这一次的值:{counter}</h2>
      <button onClick={() => setCounter(counter + 10)}>+10</button>
    </div>
  );
}
