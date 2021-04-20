import React, { PureComponent } from "react";
import Home from "@/home/index";
import Foo from "components/foo/index";

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>Bar下的App组件</h2>
        <Home />
        <Foo />
      </div>
    );
  }
}
