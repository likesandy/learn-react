import React, { PureComponent } from "react";
import { AboutStyle } from "./style";

export default class App extends PureComponent {
  render() {
    return (
      <AboutStyle>
        <h2>我是About的标题</h2>
        <ul>
          <li>列表1</li>
          <li className="active">列表2</li>
          <li>列表3</li>
          <li>列表4</li>
        </ul>
      </AboutStyle>
    );
  }
}
