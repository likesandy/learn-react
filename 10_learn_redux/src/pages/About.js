import React, { PureComponent } from "react";
import store from "../store";
import { increaseAction, reduceAction } from "../store/actions";

export default class About extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: store.getState().counter,
    };
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={() => this.increaseAction()}>+1</button>
        <button onClick={() => this.reduceAction(5)}>-5</button>
      </div>
    );
  }

  increaseAction() {
    store.dispatch(increaseAction(1));
  }

  reduceAction(num) {
    store.dispatch(reduceAction(num));
  }
}
