import React, { PureComponent } from "react";

import store from "./store";
import { increaseAction, reduceAction } from "./store/actions";

// import Home from "./pages/home";
import Home from "./pages/home-Saga";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      couner: store.getState().counter,
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        couner: store.getState().counter,
      });
    });
  }

  componentWillUnmount() {
    store.unsubscribe();
  }

  render() {
    return (
      <div>
        <h2>当前计数:{this.state.couner}</h2>
        <button onClick={() => this.increase()}>+5</button>
        <button onClick={() => this.reduce()}>-10</button>
        <hr />
        <Home />
      </div>
    );
  }

  increase() {
    store.dispatch(increaseAction(5));
  }
  reduce() {
    store.dispatch(reduceAction(10));
  }
}
