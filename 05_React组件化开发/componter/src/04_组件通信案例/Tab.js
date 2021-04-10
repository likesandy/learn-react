import React, { Component } from "react";
import "./style.css";

export default class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }
  render() {
    const { currentIndex } = this.state;
    const { titles } = this.props;
    return (
      <div className="tab-control">
        {titles.map((value, index) => {
          return (
            <div
              className={"tab-item " + (index === currentIndex ? "active" : "")}
              key={index}
              onClick={() => this.itemClick(index)}
            >
              <span>{value}</span>
            </div>
          );
        })}
      </div>
    );
  }

  itemClick(index) {
    this.setState({
      currentIndex: index,
    });

    const { itemClick } = this.props;
    itemClick(index);
  }
}
