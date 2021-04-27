import React, { useState, memo, useMemo } from "react";

const Son = memo((props) => {
  console.log("Son组件重新渲染");
  return <h2>{`姓名:${props.person.name},年龄:${props.person.age}`}</h2>;
});

export default function HookUseMemoDemo2() {
  console.log("HookUseMemoDemo2重新渲染");
  // const [person, setPerson] = useState({ name: "codertao", age: 19 });
  // const person = { name: "codertao", age: 19 };
  const person = useMemo(() => {
    return { name: "codertao", age: 19 };
  }, []);
  const [show, setShow] = useState(true);
  return (
    <div>
      <Son person={person} />
      <button onClick={() => setShow(!show)}>切换</button>
    </div>
  );
}
