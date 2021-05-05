import React, { PureComponent } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

export function Recommended() {
  return <h2>Recommended</h2>;
}
export function Toplist() {
  return <h2>Toplist</h2>;
}
export function Playlist() {
  return <h2>Playlist</h2>;
}
export function Artist() {
  return <h2>Artist</h2>;
}
export function Download() {
  return <h2>地址:https://music.163.com/#/download</h2>;
}

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavLink exact to="/" activeClassName="link_active">
            推荐
          </NavLink>
          <NavLink to="/home/toplist" activeClassName="link_active">
            排行榜
          </NavLink>
          <NavLink to="/home/playlist" activeClassName="link_active">
            歌单
          </NavLink>
          <NavLink to="/home/artist" activeClassName="link_active">
            歌手
          </NavLink>
          <button onClick={() => this.downloadApp()}>下载客户端</button>

          <Switch>
            <Route exact path="/" component={Recommended} />
            <Route path="/home/toplist" component={Toplist} />
            <Route path="/home/playlist" component={Playlist} />
            <Route path="/home/artist" component={Artist} />
            <Route path="/home/download" component={Download} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  downloadApp() {
    // console.log(this.props.history);
    // console.log(this.props.location);
    // console.log(this.props.match);
    this.props.history.push("/home/download");
  }
}
