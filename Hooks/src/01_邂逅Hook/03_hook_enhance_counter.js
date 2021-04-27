import React, { useState } from "react";

const HookEnhanceCounter = () => {
  // const [counter, setState] = useState(0);
  const [counter, setState] = useState(() => 0);
  function render() {
    // setState(counter + 10);
    // setState(counter + 10);
    // setState(counter + 10);
    setState((prevState) => prevState + 10);
    setState((prevState) => prevState + 10);
    setState((prevState) => prevState + 10);
  }
  return (
    <div>
      <h2>当前计数:{counter}</h2>
      <button onClick={() => setState()}>+1</button>
      <button onClick={() => setState((prevState) => prevState - 1)}>-1</button>
      <button onClick={render}>+30</button>
    </div>
  );
};

export default HookEnhanceCounter;
