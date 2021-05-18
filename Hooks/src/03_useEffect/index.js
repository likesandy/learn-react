import React, { useState } from "react";

const About = () => {
  const [nameState, nameSetState] = useState("codertao");
  const [ageState, ageSetState] = useState(19);

  return (
    <div>
      <h2>{nameState}</h2>
      <button onClick={nameSetState("sandy")}>修改name</button>
      <hr />
      <h2>{ageState}</h2>
      <button onClick={ageSetState(ageSetState + 1)}>+1</button>
      <button onClick={ageSetState(ageSetState - 1)}>-1</button>
    </div>
  );
};
const Home = () => {
  const [isShowState, isShowSetState] = useState(true);
  return (
    <div>
      <About />
      <button onClick={isShowSetState(!isShowState)}>切换组件</button>
    </div>
  );
};

export default Home;
