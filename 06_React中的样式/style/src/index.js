import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
// import App from "./01_内联样式/App";
// import App from "./02_普通的css/app/index";
// import App from "./03_css_module/app/index";
// import App from "./04_styled-components/app/index";
import App from "./05_classnames/App";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector("#root")
);
