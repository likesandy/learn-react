import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { counter: state.counter + 1 };
    case "reduce":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}

export default function HookUseReducer() {
  const [state, dispath] = useReducer(reducer, 0);
  return (
    <div>
      <h2>当前计数:{state.counter}</h2>
      <button onClick={() => dispath({ type: "add" })}>+1</button>
      <button onClick={() => dispath({ type: "reduce" })}>-1</button>
    </div>
  );
}
