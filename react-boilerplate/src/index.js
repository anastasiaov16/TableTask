import React from "react";
import ReactDOM from "react-dom";
import App from './components/App.jsx'
import "./styles/normalize.scss";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore.js";

export const store = configureStore();

ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);
