import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={() => this.add()}>+</button>
      </div>
    );
  }

  add() {
    // this.state.counter = this.state.counter + 1;
    // console.log(this.state.counter);
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
