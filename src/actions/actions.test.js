import { updateSearchTerm, getArticlesFromAPI } from "./actions";
import { UPDATE_SEARCH_TERM } from "../constants";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

export const mockStore = configureMockStore([thunkMiddleware]);

describe("actions", () => {
  it("should create an action to update search term", () => {
    const searchQuery = "stan smith";
    const action = {
      type: UPDATE_SEARCH_TERM,
      payload: searchQuery
    };
    expect(updateSearchTerm(searchQuery)).toEqual(action);
  });
});
