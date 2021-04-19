import React, { PureComponent } from "react";

import {
  InputStyled,
  ButtonStyled,
  InheritanceStyled,
  H2Styled,
} from "./style";

import Home from "../Home/index";
import About from "../About/index";
import { ThemeProvider } from "styled-components";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color: "purple",
    };
  }

  render() {
    return (
      <ThemeProvider theme={{ themeColor: "green", fontSize: "30px" }}>
        <H2Styled>App</H2Styled>
        <input type="text" />
        <InputStyled color={this.state.color} />
        <ButtonStyled>我是普通的按钮</ButtonStyled>
        <InheritanceStyled>我是继承的按钮</InheritanceStyled>
        <Home />
        <hr />
        <About />
      </ThemeProvider>
    );
  }
}
