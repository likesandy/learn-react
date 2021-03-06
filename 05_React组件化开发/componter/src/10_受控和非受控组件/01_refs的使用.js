import React, { PureComponent, createRef } from "react";

class Counter extends PureComponent {
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
        <button onClick={() => this.add()}>+1</button>
      </div>
    );
  }

  add() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}

// 需要从react中导入createRef
export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.titleRef = createRef();
    this.CounterRef = createRef();
    this.titleEl = null;
  }

  render() {
    return (
      <div>
        {/* <h2 ref=字符串 | 对象 | 函数>Hello World</h2> */}
        <h2 ref="titleRef">Hello World</h2>
        <h2 ref={this.titleRef}>Hello World</h2>
        <h2 ref={(arg) => (this.titleEl = arg)}>Hello World</h2>
        <button onClick={() => this.changeText()}>改变文本</button>
        <hr />
        <Counter ref={this.CounterRef} />
        <button onClick={() => this.getCounterRef()}>App按钮</button>
      </div>
    );
  }

  changeText() {
    // console.log(this.refs.titleRef);
    // 方式一: 字符串(不推荐,后续会删除)
    this.refs.titleRef.innerHTML = "Hello React";
    // 方式二: 对象(推荐)
    // console.log(this.titleRef);
    this.titleRef.current.innerHTML = "Hello React";
    // 方式三: 函数
    // console.log(this.titleEl);
    this.titleEl.innerHTML = "Hello React";
  }

  getCounterRef() {
    // console.log(this.CounterRef.current);
    this.CounterRef.current.add();
  }
}
