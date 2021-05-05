import React, { PureComponent } from "react";

export default class Detail3 extends PureComponent {
  render() {
    // console.log(this.props.location);
    const { name, age } = this.props.location.state;
    return (
      <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
      </div>
    );
  }
}
