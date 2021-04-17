import React, { PureComponent } from "react";
import { createPortal } from "react-dom";

class Modal extends PureComponent {
  render() {
    /**
     * this.props.children:可以获取当前组件所有的子元素或者子组件
     * createPortal接收两个参数
     * 第一个参数: 需要渲染的内容
     * 第二个参数: 渲染到什么地方
     */
    return createPortal(this.props.children, document.querySelector("#modal"));
  }
}
class Home extends PureComponent {
  render() {
    return (
      <div>
        <Modal>
          <h2>Title</h2>
        </Modal>
      </div>
    );
  }
}
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>Hello React</h2>
        <Home />
      </div>
    );
  }
}
