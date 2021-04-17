import React, { PureComponent, StrictMode } from "react";

class Home extends PureComponent {
  constructor(props) {
    super(props);
    console.log("Home constructor");
  }
  render() {
    // return <div ref="title">Home</div>;
    return <div>Home</div>;
  }
  // UNSAFE_componentWillMount() {
  //   console.log("Home UNSAFE_componentWillMount");x
  // }
}

class About extends PureComponent {
  constructor(props) {
    super(props);
    console.log("About constructor");
  }
  render() {
    // return <div ref="title">About</div>;
    return <div>About</div>;
  }
  // UNSAFE_componentWillMount() {
  //   console.log("About UNSAFE_componentWillMount");
  // }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home />
        </StrictMode>
        <About />
      </div>
    );
  }
}
