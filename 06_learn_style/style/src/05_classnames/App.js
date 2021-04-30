import React, { PureComponent } from "react";
import classNames from "classnames";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isBar: true,
    };
  }

  render() {
    const { isBar } = this.state;
    const isFoo = true;
    const errClass = "error";
    const titleClass = null;
    const zeroClass = 0;
    const oneClass = 1;
    return (
      <div>
        {/* 原生React中添加class方法 */}
        <h2 className="foo bar">我是标题1</h2>
        <h2 className={"foo " + (isBar ? "bar" : "")}>我是标题2</h2>
        {/* classNames库添加class */}
        <h2 className={classNames("foo", "bar")}>我是标题3</h2>
        <h2 className={classNames({ foo: isFoo, bar: isBar })}>我是标题4</h2>
        <h2
          className={classNames({ foo: isFoo, bar: isBar }, "title", errClass)}
        >
          我是标题5
        </h2>
        <h2 className={classNames(["foo", "bar", { title: titleClass }])}>
          我是标题6
        </h2>
        <h2
          className={classNames(
            ["foo", "bar", { title: titleClass, zero: zeroClass }],
            oneClass
          )}
        >
          我是标题7
        </h2>
      </div>
    );
  }
}
