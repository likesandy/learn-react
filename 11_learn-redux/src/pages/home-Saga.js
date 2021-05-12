import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { increaseAction, reduceAction } from "../store/counter/actions";
import { fetchHomeMultidataAction } from "../store/home/actions";

class Home extends PureComponent {
  componentDidMount() {
    this.props.changeBanners();
  }

  render() {
    return (
      <div>
        <h2>当前计数:{this.props.counter}</h2>
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
  counter: state.counterInfo.counter,
  banners: state.homeInfo.banners,
});

const mapDispatchToProps = (dispatch) => ({
  increase() {
    dispatch(increaseAction(5));
  },
  reduce() {
    dispatch(reduceAction(10));
  },
  changeBanners() {
    dispatch(fetchHomeMultidataAction);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
