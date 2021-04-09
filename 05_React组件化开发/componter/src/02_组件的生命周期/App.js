import React, { Component } from "react";

class Son extends Component {
  render() {
    return (
      <div>
        <h2>Son组件</h2>
      </div>
    );
  }
  componentWillUnmount() {
    console.log("执行了组件的componentWillUnmount方法");
  }
}
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      isShow: true,
    };
    console.log("执行了组件的constructor方法");
  }

  render() {
    console.log("执行了组件的render方法");
    const { counter, isShow } = this.state;
    return (
      <div>
        <h2>当前计数:{counter}</h2>
        <button onClick={() => this.add()}>+</button>
        <hr />
        <button onClick={() => this.switch()}>切换</button>
        {isShow && <Son />}
      </div>
    );
  }

  add() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  switch() {
    this.setState({
      isShow: !this.state.isShow,
    });
  }
  componentDidMount() {
    console.log("执行了组件的componentDidMount方法");
  }
  componentDidUpdate() {
    console.log("执行了组件的componentDidUpdate方法");
  }
}
