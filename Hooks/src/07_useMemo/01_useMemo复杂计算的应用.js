import React, { useMemo, useState } from "react";

function summation() {
  console.log("summation被调用");
  let sum = 0;
  for (let i = 1; i < 10; i++) {
    sum += i;
  }
  return sum;
}

export default function HookUseMemoDemo1() {
  console.log("HookUseMemoDemo1重新渲染");
  const [show, setShow] = useState(true);
  // const sum = summation();
  const sum = useMemo(() => {
    return summation();
  }, []);
  return (
    <div>
      <h2>计算数字的和:{sum}</h2>
      <button onClick={() => setShow(!show)}>切换</button>
    </div>
  );
}
