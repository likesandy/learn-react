import React, { PureComponent } from "react";
import { TitleStyled } from "./style";

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <TitleStyled>我是Home的标题</TitleStyled>
        <p>轮播图</p>
      </div>
    );
  }
}
