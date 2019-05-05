import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./container/App";
import {
  changeSearchTerm,
  searchArticles,
  updateWishlist
} from "./reducers/reducers";

const logger = createLogger();
const rootreducers = combineReducers({
  changeSearchTerm,
  searchArticles,
  updateWishlist
});
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

// ReactDom.render(
//   // history to monitor users browser history
//   <Router history={createBrowserHistory()}>
//     <Switch>
//       <Route exact path="/" component={App} />
//       <Route path="/jokes" component={Jokes} />
//     </Switch>
//   </Router>,
//   document.querySelector("#root")
// );
