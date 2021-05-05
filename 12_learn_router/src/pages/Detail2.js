import React, { PureComponent } from "react";

export default class Detail2 extends PureComponent {
  render() {
    // console.log(this.props.location.search);
    return (
      <div>
        <h2>详情界面2:{this.props.location.search}</h2>
      </div>
    );
  }
}
