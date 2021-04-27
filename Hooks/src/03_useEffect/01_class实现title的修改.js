import React, { PureComponent } from "react";

export default class ClassCounterChangeTitle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    document.title = this.state.counter;
  }

  componentDidUpdate() {
    document.title = this.state.counter;
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={() => this.setState({ counter: counter + 1 })}>
          +1
        </button>
      </div>
    );
  }
}
