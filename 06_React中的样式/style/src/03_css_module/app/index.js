import React, { PureComponent } from "react";

import Style from "./style.module.css";

import Home from "../Home/index";
import About from "../About/index";

export default class App extends PureComponent {
  render() {
    return (
      <div id="app">
        <h2 className={Style.title}>App</h2>
        <Home />
        <About />
      </div>
    );
  }
}
