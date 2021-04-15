import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.stopDefault(e)}>
          <label htmlFor="username">
            用户:
            <input
              type="text"
              id="username"
              onChange={(e) => this.listenChange(e)}
              value={this.state.username}
            />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }

  stopDefault(e) {
    e.preventDefault();
    console.log(this.state.username);
  }

  listenChange(e) {
    // console.log(e.target.value);
    this.setState({
      username: e.target.value,
    });
  }
}
