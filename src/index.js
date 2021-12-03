import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style/index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
require("dotenv").config();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
