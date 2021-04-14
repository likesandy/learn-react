import React, { Component } from "react";

class Father extends Component {
  render() {
    console.log("Father组件render函数被调用");
    return (
      <div>
        <h2>我是Father组件</h2>
        <Son />
      </div>
    );
  }
}

function Son() {
  console.log("Son组件被调用");
  return (
    <div>
      <h2>我是Son组件</h2>
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    console.log("App组件render函数被调用");
    const { counter } = this.state;
    return (
      <div>
        <h2>当前计数:{counter}</h2>
        <button onClick={() => this.add()}>+1</button>
        <Father />
      </div>
    );
  }

  add() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
