import React, { PureComponent } from "react";

class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>Hello React</h2>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

function HighOrderComponent(Component) {
  class EnhanceComponent extends PureComponent {
    render() {
      return <Component {...this.props} />;
    }
  }
  EnhanceComponent.displayName = "sandy";
  return EnhanceComponent;
}

const NewComponent = HighOrderComponent(App);
export default NewComponent;
