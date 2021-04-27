import React, { PureComponent, useRef } from "react";

class Son1 extends PureComponent {
  render() {
    return (
      <div>
        <h2>Son1</h2>
      </div>
    );
  }
}

const Son2 = (props) => {
  return <h2>Son2</h2>;
};

export default function HookUseRefDemo1() {
  const titleRef = useRef();
  const inputRef = useRef();
  const son1Ref = useRef();
  const son2Ref = useRef();

  function change() {
    titleRef.current.innerHTML = "Hello React";
    inputRef.current.focus();
    console.log(son1Ref.current);
    console.log(son2Ref.current);
  }

  return (
    <div>
      <h2 ref={titleRef}>Hello World</h2>
      <input type="text" ref={inputRef} />
      <button onClick={change}>获取DOM</button>
      <Son1 ref={son1Ref} />
      <Son2 ref={son2Ref} />
    </div>
  );
}
