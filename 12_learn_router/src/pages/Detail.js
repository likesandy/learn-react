import React, { PureComponent } from "react";

export default class Detail extends PureComponent {
  render() {
    // console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    return (
      <div>
        <h2>详情界面: {id}</h2>
      </div>
    );
  }
}
