import React, { Component } from "react";

function ChildCpn(props) {
  const { name, age, height } = props;
  return (
    <div>
      <h2>
        {"我的名字叫做" +
          name +
          ",我的年龄是" +
          age +
          "岁,我的身高是" +
          height +
          "cm"}
      </h2>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="sandy" age="21" height="163" />
        <ChildCpn name="tao" age="19" height="183" />
      </div>
    );
  }
}

export default App;
