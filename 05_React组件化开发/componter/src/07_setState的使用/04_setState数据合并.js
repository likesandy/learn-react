import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World",
    };
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <h2>{message}</h2>
        <button onClick={() => this.changeText()}>改变文本</button>
      </div>
    );
  }

  changeText() {
    this.setState({
      message: "Hello React",
    });

    // 内部: Object.assign({}, this.state, { message: "Hello React" })
  }
}
