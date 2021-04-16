import React, { PureComponent, Fragment } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      friends: [
        { name: "codertao", age: 19 },
        { name: "sandy", age: 21 },
        { name: "zm", age: 20 },
      ],
    };
  }
  render() {
    const { counter, friends } = this.state;
    return (
      // 短语法,Fragment可以省略(有些情况下还是不能省略的)
      // 使用段语法,Fragment也可以不导入直接使用
      <>
        <h2>当前计数:{counter}</h2>
        <button onClick={() => this.setState({ counter: counter + 1 })}>
          +1
        </button>
        {friends.map((value, index) => {
          return (
            <Fragment key={value.name}>
              <h2>{value.name}</h2>
              <p>{value.age}</p>
              <hr />
            </Fragment>
          );
        })}
      </>
    );
  }
}
