import React, { PureComponent } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./style.css";

export default class SwitchTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true,
    };
  }

  render() {
    const { isOn } = this.state;
    return (
      <div>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={isOn ? "on" : "off"}
            classNames="btn"
            /**
             * 动画最终还是由样式来决定的,timeout只是决定整个动画的必须花费的时间
             * 比如样式动画设置的是300ms,timeout设置的1000ms,如果在浏览器查看
             * 会发现动画执行完毕后,还是处在active的时候,等待1s过去才会切换到done的状态
             */
            timeout={300}
          >
            <button onClick={() => this.setState({ isOn: !isOn })}>
              {isOn ? "on" : "off"}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  }
}
