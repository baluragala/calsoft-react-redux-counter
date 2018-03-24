import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import counterReducer from "./reducers/counter";
import { Provider } from "react-redux";

const store = createStore(counterReducer);

ReactDOM.render(
  <Provider store={store}>
    <App ctr="10" />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
