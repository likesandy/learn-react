import React, { Component } from "react";

const AppContext = React.createContext({
  userName: "sandy",
  passWord: "321",
});
const ThemeContext = React.createContext({
  color: "red",
});

const Father = (props) => {
  return (
    <AppContext.Consumer>
      {(value) => {
        return (
          <ThemeContext.Consumer>
            {(theme) => {
              return (
                <div>
                  <h2 style={{ color: theme.color }}>
                    用户名:{value.userName}
                  </h2>
                  <h2>密码:{value.passWord}</h2>
                </div>
              );
            }}
          </ThemeContext.Consumer>
        );
      }}
    </AppContext.Consumer>
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
        <AppContext.Provider value={this.state}>
          <ThemeContext.Provider value={{ color: "blue" }}>
            <Father />
          </ThemeContext.Provider>
        </AppContext.Provider>
      </div>
    );
  }
}
