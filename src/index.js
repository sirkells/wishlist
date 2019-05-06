import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./container/App";
import Wishlist from "./components/Wishlists/Wishlists";
import Navbar from "./components/Navbar/Navbar";
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

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

ReactDOM.render(
  // history to monitor users browser history
  <Router history={createBrowserHistory()}>
    <Switch>
      {/* for each route, each component is rendered as  */}
      {/* children of the header component */}
      <Route
        exact
        path="/"
        render={() => (
          <Navbar>
            <Provider store={store}>
              <App />
            </Provider>
          </Navbar>
        )}
      />
      <Route
        path="/wishlist"
        render={() => (
          <Navbar>
            <Provider store={store}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Wishlist />
            </Provider>
          </Navbar>
        )}
      />
    </Switch>
  </Router>,
  document.getElementById("root")
);
