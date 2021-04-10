import React, { Component } from "react";

const Son = (props) => {
  const { userName, passWord } = props;
  return (
    <div>
      <h2>用户名:{userName}</h2>
      <h2>密码:{passWord}</h2>
    </div>
  );
};
const Father = (props) => {
  return (
    <div>
      <Son {...props} />
    </div>
  );
};
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "codertao",
      passWord: "123",
    };
  }
  render() {
    return (
      <div>
        <Father {...this.state} />
      </div>
    );
  }
}
