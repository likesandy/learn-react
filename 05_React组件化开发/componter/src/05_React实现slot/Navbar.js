import React, { Component } from "react";
import "./style.css";
export default class Navbar extends Component {
  render() {
    const { leftSolt, centerSolt, rightSlot } = this.props;
    return (
      <div className="nav-bar">
        <div className="nav-left">{leftSolt}</div>
        <div className="nav-center">{centerSolt}</div>
        <div className="nav-right">{rightSlot}</div>
      </div>
    );
  }
}
