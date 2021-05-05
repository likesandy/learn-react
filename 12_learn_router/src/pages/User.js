import React, { PureComponent } from "react";
import { Redirect } from "react-router";

export default class User extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  render() {
    return this.state.isLogin ? (
      <div>
        <h2>Hello codertao!</h2>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}
