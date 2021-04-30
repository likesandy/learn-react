import React, { PureComponent } from "react";
import { Card } from "antd";
import { CSSTransition } from "react-transition-group";
import "./style.css";

export default class CSSTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }

  render() {
    const { isShow } = this.state;
    return (
      <div>
        <button onClick={(e) => this.setState({ isShow: !isShow })}>
          显示/隐藏
        </button>
        <CSSTransition
          in={isShow}
          classNames="card"
          timeout={300}
          unmountOnExit={true}
          appear
          onEnter={() => console.log("开始进入")}
          onEntering={() => console.log("正在进入")}
          onEntered={() => console.log("进入完成")}
          onExit={() => console.log("开始退出")}
          onExiting={() => console.log("正在退出")}
          onExited={() => console.log("退出完成")}
        >
          <Card
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          ></Card>
        </CSSTransition>
      </div>
    );
  }
}
