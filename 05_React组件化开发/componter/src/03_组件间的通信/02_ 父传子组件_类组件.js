import React, { Component } from "react";
class Father extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { name, age } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
      </div>
    );
  }
}
export default class App extends Component {
  render() {
    return (
      <div>
        <Father name={"codertao"} age={19} />
      </div>
    );
  }
}
