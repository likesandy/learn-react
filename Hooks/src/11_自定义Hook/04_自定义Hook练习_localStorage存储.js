import React from "react";
import useLocalStorage from "./hooks/localStorage_hook";

export default function CustomHookDemo4() {
  const [name, setName] = useLocalStorage();
  return (
    <div>
      <h2>数据存储:{name}</h2>
      <button onClick={() => setName("codertao")}>设置name</button>
    </div>
  );
}
