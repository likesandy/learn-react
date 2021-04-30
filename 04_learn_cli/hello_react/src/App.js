import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>当前计数:{counter}</h2>
        <button onClick={(e) => this.add()}>+</button>
        <button onClick={(e) => this.reduce()}>-</button>
      </div>
    );
  }

  add() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  reduce() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
}
