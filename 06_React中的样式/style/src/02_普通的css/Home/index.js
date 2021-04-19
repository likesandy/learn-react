import React, { PureComponent } from "react";
import "./style.css";

export default class App extends PureComponent {
  render() {
    return (
      <div className="home">
        <h2 className="title">我是Home的标题</h2>
        <p>轮播图</p>
      </div>
    );
  }
}
