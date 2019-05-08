import { updateWishlist, updateSearchTerm } from "./reducers";
import { ADD_TO_WISHLIST, UPDATE_SEARCH_TERM } from "../constants";

const wishlistState = {
  wishlistDB: []
};
describe("reducers for updateWishlits", () => {
  it("should get the wishlistsDB initial state", () => {
    expect(updateWishlist(undefined, {})).toEqual({
      wishlistDB: []
    });
  });

  it("should execute ADD_TO_WISHLIST action", () => {
    expect(
      updateWishlist(wishlistState, {
        type: ADD_TO_WISHLIST,
        payload: [
          {
            displayName: "BBC Hu NMD Shoes",
            id: "ef7387"
          }
        ]
      })
    ).toEqual({
      wishlistDB: [
        {
          displayName: "BBC Hu NMD Shoes",
          id: "ef7387"
        }
      ]
    });
  });
});
const initialState = {
  searchTerm: ""
};
describe("SearchTerm reducer", () => {
  it("should get the searchTerm initial state", () => {
    expect(updateSearchTerm(undefined, {})).toEqual({
      searchTerm: ""
    });
  });

  it("should get the updated search term", () => {
    expect(
      updateSearchTerm(initialState, {
        type: UPDATE_SEARCH_TERM,
        payload: "stan"
      })
    ).toEqual({
      searchTerm: "stan"
    });
  });
});
