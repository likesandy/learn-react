import React, { PureComponent } from "react";

class Login extends PureComponent {
  render() {
    return <h2>请先登录</h2>;
  }
}

class ShoppingCart extends PureComponent {
  render() {
    return <h2>购物车界面</h2>;
  }
}

function LoginAuthentication(Component) {
  return (props) => {
    const { isLogin } = props;
    if (isLogin) {
      return <Component />;
    } else {
      return <Login />;
    }
  };
}

const NewLogin = LoginAuthentication(ShoppingCart);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <NewLogin isLogin={true} />
      </div>
    );
  }
}
