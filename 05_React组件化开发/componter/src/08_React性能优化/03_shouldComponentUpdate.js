import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: "Hello World",
    };
  }
  render() {
    const { counter, message } = this.state;
    console.log("App组件render函数被渲染");
    return (
      <div>
        <h2>当前计数:{counter}</h2>
        <button onClick={() => this.setState({ counter: counter + 1 })}>
          +1
        </button>
        <button onClick={() => this.setState({ message: "Hello React" })}>
          改变文本
        </button>
      </div>
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.counter !== nextState.counter) {
      return true;
    }
    return false;
  }
}
