import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import Root from "./Root";

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Root>,
  document.getElementById("root")
);
