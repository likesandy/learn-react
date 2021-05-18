import React, { memo, useState } from "react";

/**
 * useState
 * 参数: state默认值
 * 返回值: 是一个数组
 *        第一个元素: state
 *        第二个元素: 修改state的方法
 * 每个状态是独立的
 * 永远不要直接修改state,只能通过对应的方法修改state
 */
export default memo(function App() {
  // const [counteState, setCountState] = useState(0);
  const [counteState, setCountState] = useState(() => 0);
  const [nameState, setNameState] = useState("sandy");
  const [infoState, setInfoState] = useState({ name: "sandy", age: 19 });
  const [filmState, setFilmState] = useState([
    { name: "大话西游", date: 1995 },
    { name: "国产凌凌漆", date: 1994 },
    { name: "喜剧之王", date: 1999 },
    { name: "唐伯虎点秋香", date: 1993 },
  ]);

  function increment() {
    // setCountState(counteState + 10)
    // setCountState(counteState + 10)
    // setCountState(counteState + 10)
    setCountState((preCountState) => preCountState + 10)
    setCountState((preCountState) => preCountState + 10)
    setCountState((preCountState) => preCountState + 10)
  }
  function changeName() {
    // infoState.name = 'codertao'
    setInfoState({ ...infoState, name: 'codertao' })
  }
  return (
    <div>
      <h2>当前计数:{counteState}</h2>
      <button onClick={() => { setCountState(counteState + 1); }}> +1 </button>
      <button onClick={() => { setCountState(counteState - 1) }}> -1</button>
      <hr />
      <h2>{nameState}</h2>
      <button onClick={() => { setNameState("codertao") }} > 修改名称 </button>
      <hr />
      <h2>姓名:{infoState.name},年龄:{infoState.age}</h2>
      <button onClick={() => { changeName() }}>修改姓名</button>
      <hr />
      <ul>
        {
          filmState.map((value) => {
            return <li key={value.name}>名称{value.name},日期:{value.date}</li>
          })
        }
      </ul>
      <hr />
      <h2>当前计数:{counteState}</h2>
      <button onClick={() => { increment() }}>+30</button>
    </div>
  );
});
