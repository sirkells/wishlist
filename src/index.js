import React from "react";
// import { ReactDOM } from "react-dom";
// to enable jest to recognize the import
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./container/App/App";
import Wishlist from "./container/Wishlists/Wishlists";
import Navbar from "./components/Navbar/Navbar";
import store from "./store";

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

              <Wishlist />
            </Provider>
          </Navbar>
        )}
      />
    </Switch>
  </Router>,
  document.getElementById("root")
);
