import React from "react";
import useScoll from "./hooks/scroll_hook";

export default function CustomHookDemo3() {
  const scroll = useScoll();
  return (
    <div style={{ padding: "1000px 0" }}>
      <h2 style={{ position: "fixed", left: 0, top: 0 }}>滚动位置:{scroll}</h2>
    </div>
  );
}
