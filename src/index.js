import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import ReactNotification from "react-notifications-component";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications-component/dist/theme.css";

import "./assets/css/style.css";
import "font-awesome/css/font-awesome.min.css";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactNotification />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
