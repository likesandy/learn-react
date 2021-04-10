import React, { Component } from "react";
import Tab from "./Tab";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTitle: "新款",
    };
    this.titles = ["新款", "精选", "流行"];
  }
  render() {
    const { currentTitle } = this.state;
    return (
      <div>
        <Tab
          titles={this.titles}
          itemClick={(index) => this.itemClick(index)}
        />
        <h2>{currentTitle}</h2>
      </div>
    );
  }

  itemClick(index) {
    this.setState({
      currentTitle: this.titles[index],
    });
  }
}
