import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import "./style.css";

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
