import React from "react";

const Son = () => {
  return (
    <div>
      <h2>Son组件</h2>
    </div>
  );
};
const Father = () => {
  return (
    <div>
      <h2>Father组件</h2>
      <Son />
    </div>
  );
};
const App = () => {
  return (
    <div>
      <Father />
    </div>
  );
};

export default App;
