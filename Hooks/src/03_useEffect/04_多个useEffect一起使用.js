import React, { useEffect, useState } from "react";

export default function HookUseEffects() {
  const [counter, setCounter] = useState(0);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    console.log("更新了DOM", counter);
  }, [counter]);

  useEffect(() => {
    console.log("订阅了事件");
  }, []);

  useEffect(() => {
    console.log("发送了网络请求");
  }, []);

  return (
    <div>
      <h2>当前计数:{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <h2>{isLogin ? "已登录" : "请先登录"}</h2>
      <button onClick={() => setIsLogin(!isLogin)}>登录/注销</button>
    </div>
  );
}
