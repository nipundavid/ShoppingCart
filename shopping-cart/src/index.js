import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Containers/App";
import * as serviceWorker from "./serviceWorker";
import { render } from "@testing-library/react";
import reducers from "./redux/reducers";

const Store = createStore(reducers);

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
