import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color: "blue",
    };
  }

  render() {
    const pStyle = {
      color: this.state.color,
      TextDecoder: "underline",
    };
    return (
      <div>
        <h2 style={{ fontSize: "50px", color: "red" }}>Hello React</h2>
        <p style={pStyle}>我是P元素</p>
        <button onClick={() => this.changeColor()}>改变颜色</button>
      </div>
    );
  }

  changeColor() {
    this.setState({
      color: "pink",
    });
  }
}
