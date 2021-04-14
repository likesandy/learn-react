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
        <button id="btn">改变文本2</button>
        <Son message={message} />
      </div>
    );
  }

  changeText() {
    // 方式一
    setTimeout(() => {
      this.setState({
        message: "Hello React",
      });
      console.log(this.state.message);
    }, 0);
  }

  componentDidMount() {
    // 方式二
    document.querySelector("#btn").addEventListener("click", () => {
      this.setState({
        message: "Hello React",
      });
      console.log(this.state.message);
    });
  }
}

const Son = (props) => {
  const { message } = props;
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};
