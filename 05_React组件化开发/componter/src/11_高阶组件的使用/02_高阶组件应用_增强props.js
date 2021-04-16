import React, { PureComponent } from "react";

function enhanceProps(HighOrderComponent) {
  return (props) => {
    return <HighOrderComponent {...props} height={1.83} />;
  };
}

class Home extends PureComponent {
  render() {
    return (
      <h2>
        Home组件
        <div>{`姓名:${this.props.name} 年龄:${this.props.age} 身高:${this.props.height}`}</div>
      </h2>
    );
  }
}
class About extends PureComponent {
  render() {
    return (
      <h2>
        About组件
        <div>{`姓名:${this.props.name} 年龄:${this.props.age} 身高:${this.props.height}`}</div>
      </h2>
    );
  }
}

const UserHome = enhanceProps(Home);
const UserAbout = enhanceProps(About);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UserHome name="codertao" age={19} />
        <hr />
        <UserAbout name="sandy" age={21} />
        <hr />
      </div>
    );
  }
}
