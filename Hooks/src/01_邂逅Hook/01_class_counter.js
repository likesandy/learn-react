import React, { PureComponent } from "react";

export default class ClasssCounter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    console.log("class render被调用");
    const { counter } = this.state;
    return (
      <div>
        <h2>当前计数:{counter}</h2>
        <button onClick={() => this.setState({ counter: counter + 1 })}>
          +1
        </button>
        <button onClick={() => this.setState({ counter: counter - 1 })}>
          -1
        </button>
      </div>
    );
  }
}
