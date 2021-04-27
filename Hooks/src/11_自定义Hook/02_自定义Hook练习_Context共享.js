import React from "react";
import useUserContex from "./hooks/user_hook";

export default function CustomHookDemo2() {
  const [user, theme] = useUserContex();

  return (
    <div>
      <h2
        style={{ color: theme.color }}
      >{`姓名:${user.name},年龄:${user.age}`}</h2>
    </div>
  );
}
