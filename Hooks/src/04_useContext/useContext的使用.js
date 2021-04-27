import React, { useContext } from "react";
import { UserContext, ThemeContext } from "../App";

export default function HookContext() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h2
        style={{ fontSize: theme.fontSize, color: theme.color }}
      >{`姓名:${user.name},年龄:${user.age}`}</h2>
    </div>
  );
}
