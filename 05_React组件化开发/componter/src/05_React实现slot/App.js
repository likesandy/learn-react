import React, { Component } from "react";
import Navbar from "./Navbar";
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar
          leftSolt={<span>左边</span>}
          centerSolt={<span>中间</span>}
          rightSlot={<span>右边</span>}
        />
      </div>
    );
  }
}
