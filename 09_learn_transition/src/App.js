import React, { PureComponent } from "react";
import CSSTransitionDemo from "./transition/01_CSSTransition/CSSTransitionDemo";
import SwitchTransitionDemo from "./transition/02_SwitchTransition/SwitchTransitionDemo";
import TransitionGroupDemo from "./transition/03_TransitionGroup/TransitionGroupDemo";

export default class App extends PureComponent {
  render() {
    return (
      <div style={{ textAlign: "center", padding: "30px 0" }}>
        {/* <CSSTransitionDemo />
        <SwitchTransitionDemo /> */}
        <TransitionGroupDemo />
      </div>
    );
  }
}
