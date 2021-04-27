import React, { forwardRef, useRef } from "react";

const Son = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

export default function ForwardRefDemo() {
  const inputRef = useRef();
  return (
    <div>
      <Son ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>聚焦</button>
    </div>
  );
}
