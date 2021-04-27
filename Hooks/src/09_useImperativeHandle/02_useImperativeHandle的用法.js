import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Son = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        inputRef.current.focus();
      },
    }),
    [inputRef]
  );
  return <input type="text" ref={inputRef} />;
});

export default function HookUseImperativeHandleDemo() {
  const inputRef = useRef();

  return (
    <div>
      <Son ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>聚焦</button>
    </div>
  );
}
