import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello React",
    };
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <h2>{message}</h2>
      </div>
    );
  }
}
