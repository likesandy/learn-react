import React, { PureComponent, createContext } from "react";

const UserContext = createContext();
const { Provider, Consumer } = UserContext;

function enhanceProps(HighOrderComponent) {
  return (props) => {
    return (
      <Consumer>
        {(value) => {
          return <HighOrderComponent {...props} {...value} />;
        }}
      </Consumer>
    );
  };
}

class Home extends PureComponent {
  render() {
    return (
      <h2>
        About组件
        <div>{`姓名:${this.props.name} 年龄:${this.props.age} 身高:${this.props.height}`}</div>
      </h2>
    );
  }
}
class About extends PureComponent {
  render() {
    return (
      <h2>
        About组件
        <div>{`姓名:${this.props.name} 年龄:${this.props.age} 身高:${this.props.height}`}</div>
      </h2>
    );
  }
}
class List extends PureComponent {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.age}</li>
          <li>{this.props.height}</li>
        </ul>
      </div>
    );
  }
}
const UserHome = enhanceProps(Home);
const UserAbout = enhanceProps(About);
const UserList = enhanceProps(List);

export default class App extends PureComponent {
  render() {
    return (
      <Provider value={{ name: "codertao", age: 19, height: 1.83 }}>
        <UserHome />
        <hr />
        <UserAbout />
        <hr />
        <UserList />
      </Provider>
    );
  }
}
