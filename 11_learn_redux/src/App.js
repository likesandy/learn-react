import React, { PureComponent } from "react";
// import Home from "./pages/Home";
import Home from "./pages/Home1";
import About from "./pages/About2";

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <hr />
        <About />
      </div>
    );
  }
}
