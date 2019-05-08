import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import {
  updateSearchTerm,
  searchArticles,
  updateWishlist
} from "./reducers/reducers";

const logger = createLogger();
const rootreducers = combineReducers({
  updateSearchTerm,
  searchArticles,
  updateWishlist
});
export const store = createStore(
  rootreducers,
  applyMiddleware(thunkMiddleware, logger)
);
export default store;
