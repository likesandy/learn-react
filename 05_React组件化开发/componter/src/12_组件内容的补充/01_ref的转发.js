import React, { PureComponent, createRef, forwardRef } from "react";

class Home extends PureComponent {
  render() {
    return <h2>Home</h2>;
  }
}

const About = forwardRef(function (props, ref) {
  return <p ref={ref}>About</p>;
});

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.titleRef = createRef();
    this.homeRef = createRef();
    this.aboutRef = createRef();
  }

  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>Hello React</h2>
        <Home ref={this.homeRef} />
        <About ref={this.aboutRef} />
        <button onClick={() => this.getRef()}>获取元素</button>
      </div>
    );
  }

  getRef() {
    console.log(this.titleRef.current);
    console.log(this.homeRef.current);
    console.log(this.aboutRef.current);
  }
}
