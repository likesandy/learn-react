import React, { Component } from "react";

const AppContext = React.createContext({
  userName: "sandy",
  passWord: "321",
});
const { Provider, Consumer } = AppContext;

const Father = (props) => {
  return (
    <Consumer>
      {(value) => {
        return (
          <div>
            <h2>用户名:{value.userName}</h2>
            <h2>密码:{value.passWord}</h2>
          </div>
        );
      }}
    </Consumer>
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
        <Provider value={this.state}>
          <Father />
        </Provider>
      </div>
    );
  }
}
