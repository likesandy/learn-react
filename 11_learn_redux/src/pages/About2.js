import React from "react";
import { increaseAction, reduceAction } from "../store/actions";
import { connect } from "../uitls/connect";

function About(props) {
  return (
    <div>
      <h1>About</h1>
      <h2>当前计数:{props.counter}</h2>
      <button onClick={() => props.add()}>+1</button>
      <button onClick={() => props.reduce(5)}>-5</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispachToProps = (dispath) => ({
  add() {
    dispath(increaseAction());
  },
  reduce(num) {
    dispath(reduceAction(num));
  },
});

export default connect(mapStateToProps, mapDispachToProps)(About);
