import React, { PureComponent } from "react";
import { EventEmitter } from "events";

// 创建事件总线
const eventBus = new EventEmitter();

class Brother1 extends PureComponent {
  render() {
    return (
      <div>
        <h2>Brother1</h2>
      </div>
    );
  }
}

class Brother2 extends PureComponent {
  render() {
    return (
      <div>
        <h2>Brother2</h2>
        <button onClick={() => this.emitEvent()}>按钮</button>
      </div>
    );
  }

  emitEvent() {
    eventBus.emit("sayHello", "Hello Event", 123);
  }

  handleSayHelloListener(string, number) {
    console.log(string, number);
  }

  // 事件监听都在componentDidMount中实现,然后在componentWillUnmount取消事件监听
  componentDidMount() {
    eventBus.addListener("sayHello", this.handleSayHelloListener);
  }
  componentWillUnmount() {
    eventBus.removeAllListeners("sayHello", this.handleSayHelloListener);
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Brother1 />
        <Brother2 />
      </div>
    );
  }
}
