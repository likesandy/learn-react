import React, { Component } from "react";

class ChildCpn extends Component {
  //  可以省略
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { name, age, height } = this.props;
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
