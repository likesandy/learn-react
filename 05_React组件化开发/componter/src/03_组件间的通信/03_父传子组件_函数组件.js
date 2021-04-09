import React from "react";

const Father = (props) => {
  const { name, age } = props;
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <Father name={"sandy"} age={21} />
    </div>
  );
};

export default App;
