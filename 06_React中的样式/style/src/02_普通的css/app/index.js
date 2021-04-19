import React, { PureComponent } from "react";
import Home from "../Home/index";
import About from "../About/index";
import "./style.css";
export default class App extends PureComponent {
  render() {
    return (
      <div id="app">
        <h2 className="title">App</h2>
        <Home />
        <About />
      </div>
    );
  }
}
