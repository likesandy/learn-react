import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      validation: "",
    };
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.stopDefault(e)}>
          <div>
            <label htmlFor="username">
              用户:
              <input
                type="text"
                id="username"
                name="username"
                onChange={(e) => this.listenChange(e)}
                value={this.state.username}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              密码:
              <input
                type="text"
                id="password"
                name="password"
                onChange={(e) => this.listenChange(e)}
                value={this.state.password}
              />
            </label>
          </div>
          <div>
            <label htmlFor="validation">
              验证:
              <input
                type="text"
                id="validation"
                name="validation"
                onChange={(e) => this.listenChange(e)}
                value={this.state.validation}
              />
            </label>
          </div>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }

  stopDefault(e) {
    const { username, password, validation } = this.state;
    e.preventDefault();
    console.log(username, password, validation);
  }

  listenChange(e) {
    console.log(e.target.name);
    this.setState({
      // 计算属性名
      [e.target.name]: e.target.value,
    });
  }
}
