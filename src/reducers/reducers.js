import {
  CHANGE_SEARCH_TERM,
  FETCH_COMPLETED,
  FETCH_FAILED,
  FETCH_STARTED,
  SEARCH_BOX_CLEARED,
  NO_ITEM_FOUND,
  ADD_TO_WISHLIST,
  DELETE_WISHLIST,
  GET_WISHLISTS
} from "../constants";

const wishlistState = {
  //wishlistDB: JSON.parse(localStorage.getItem("data") || "[]")
  wishlistDB: []
};

export const updateWishlist = (state = wishlistState, action = {}) => {
  switch (action.type) {
    case GET_WISHLISTS:
      return {
        ...state,
        wishlistDB: action.payload
      };
    case ADD_TO_WISHLIST:
      return { ...state, wishlistDB: action.payload };
    case DELETE_WISHLIST:
      return { ...state, wishlistDB: action.payload };
    default:
      return state;
  }
};

const initialState = {
  searchTerm: ""
};

export const changeSearchTerm = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

const articlesData = {
  articles: [],
  isLoading: false,
  hasFailed: false,
  errorMessage: ""
};
export const searchArticles = (state = articlesData, action = {}) => {
  switch (action.type) {
    case FETCH_STARTED:
      return { ...state, isLoading: true };
    case FETCH_COMPLETED:
      return { ...state, articles: action.payload, isLoading: false };
    case FETCH_FAILED:
      alert(action.payload);
      return {
        ...state,
        hasFailed: true,
        isLoading: false,
        errorMessage: action.payload,
        articles: []
      };
    case SEARCH_BOX_CLEARED:
      return { ...state, articles: [] };
    case NO_ITEM_FOUND:
      return { ...state, articles: [] };
    default:
      return state;
  }
};
