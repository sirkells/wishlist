import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./container/App";
import { changeSearchTerm, searchArticles } from "./reducers/reducers";

const logger = createLogger();
const rootreducers = combineReducers({ changeSearchTerm, searchArticles });
const store = createStore(
  rootreducers,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
