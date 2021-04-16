import React, { PureComponent, createContext } from "react";

const UserContext = createContext();
const { Provider, Consumer } = UserContext;

class Home extends PureComponent {
  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <h2>
              Home组件
              <div>{`姓名:${value.name} 年龄:${value.age} 身高:${value.height}`}</div>
            </h2>
          );
        }}
      </Consumer>
    );
  }
}
class About extends PureComponent {
  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <h2>
              About组件
              <div>{`姓名:${value.name} 年龄:${value.age} 身高:${value.height}`}</div>
            </h2>
          );
        }}
      </Consumer>
    );
  }
}
export default class App extends PureComponent {
  render() {
    return (
      <Provider value={{ name: "codertao", age: 19, height: 1.83 }}>
        <Home />
        <hr />
        <About />
      </Provider>
    );
  }
}
