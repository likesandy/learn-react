import React, { PureComponent } from "react";
import Style from "./style.module.css";

export default class App extends PureComponent {
  render() {
    return (
      <div className="about">
        <h2 className={Style.title}>我是About的标题</h2>
        <ul>
          <li>列表1</li>
          <li>列表2</li>
          <li>列表3</li>
          <li>列表4</li>
        </ul>
      </div>
    );
  }
}
