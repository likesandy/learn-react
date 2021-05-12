import React, { PureComponent } from "react";

import { connect } from "react-redux";
import {
  increaseAction,
  reduceAction,
  // changeBannersAction,
  getBannersAction,
} from "../store/actions";

class Home extends PureComponent {
  componentDidMount() {
    this.props.getBanners();
  }
  render() {
    return (
      <div>
        <h2>当前计数:{this.props.couner}</h2>
        <button onClick={() => this.props.increase()}>+5</button>
        <button onClick={() => this.props.reduce()}>-10</button>
        <hr />
        <h2>Banner</h2>
        <ul>
          {this.props.banners.map((value) => {
            return <li key={value.acm}>{value.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
  banners: state.banners,
});

const mapDispatchToProps = (dispatch) => ({
  increase() {
    dispatch(increaseAction(5));
  },
  reduce() {
    dispatch(reduceAction(10));
  },
  // changeBanners(banners) {
  //   dispatch(changeBannersAction(banners));
  // },
  getBanners() {
    dispatch(getBannersAction);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
