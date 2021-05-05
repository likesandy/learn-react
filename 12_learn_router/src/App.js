import React, { PureComponent } from "react";
import { Route, Link, NavLink, Switch, withRouter } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Mine from "./pages/Mine";
import NoMatch from "./pages/NoMatch";
import "./App.css";
import Login from "./pages/Login";
import User from "./pages/User";
import Produce from "./pages/Produce";
import Detail from "./pages/Detail";
import Detail2 from "./pages/Detail2";
import Detail3 from "./pages/Detail3";
import { renderRoutes } from "react-router-config";
import routes from "./router";

class App extends PureComponent {
  render() {
    const id = "123";
    const person = { name: "codertao", age: 19 };
    return (
      <div>
        {/**
         * Link最终会被渲染成a标签,而且每个link都会被渲染
         * Route相当于是一个占位符,只有当to和path匹配成功之后才会渲染出来,没有匹配成功则不会渲染
         */}

        {/* <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/mine">我的</Link> */}

        {/* 这里的exact是NavLink特有的属性,表示精准匹配的时候给组件动态添加类名为active */}
        <NavLink exact to="/" activeClassName="link_active">
          首页
        </NavLink>
        <NavLink to="/about" activeClassName="link_active">
          关于
        </NavLink>
        <NavLink to="/mine" activeClassName="link_active">
          我的
        </NavLink>
        <NavLink to="/user" activeClassName="link_active">
          用户
        </NavLink>
        <button onClick={() => this.produce()}>商品</button>
        <NavLink to={`/detail/${id}`} activeClassName="link_active">
          详情
        </NavLink>
        <NavLink
          to={`/detail2?name=codertao&age=19`}
          activeClassName="link_active"
        >
          详情2
        </NavLink>
        <NavLink
          to={{
            pathname: "/detail3",
            search: "?name=codertao",
            state: person,
          }}
          activeClassName="link_active"
        >
          详情3
        </NavLink>

        {/* Swithc = 排他,只会匹配一个路由,匹配到就不会继续匹配了 */}
        {/* <Switch> */}
        {/* 这里的exact表示当路径精准匹配的时候表示渲染Home组件 */}
        {/* <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/mine" component={Mine} />
          <Route path="/user" component={User} />
          <Route path="/login" component={Login} />
          <Route path="/produce" component={Produce} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/detail2" component={Detail2} />
          <Route path="/detail3" component={Detail3} />
          <Route component={NoMatch} />
        </Switch> */}
        {renderRoutes(routes)}
      </div>
    );
  }
  produce() {
    this.props.history.push("/produce");
  }
}

export default withRouter(App);
