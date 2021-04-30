import React, { PureComponent } from "react";
import Style from "./style.module.css";

export default class App extends PureComponent {
  render() {
    return (
      <div className="home">
        <h2 className={Style.title}>我是Home的标题</h2>
        <p>轮播图</p>
      </div>
    );
  }
}
