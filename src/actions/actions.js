import {
  UPDATE_SEARCH_TERM,
  FETCH_COMPLETED,
  FETCH_FAILED,
  FETCH_STARTED,
  SEARCH_BOX_CLEARED,
  NO_ITEM_FOUND,
  ADD_TO_WISHLIST,
  DELETE_WISHLIST,
  GET_WISHLISTS
} from "../constants";

const errorMessage = "Enter a valid product name";
const API = "https://www.adidas.co.uk/api/search/suggestions";
let DB = JSON.parse(localStorage.getItem("data") || "[]");

const updateDB = data => localStorage.setItem("data", JSON.stringify(data));

const addToDB = (DB, data) => {
  const alreadyInWishlist = DB.some(article => article.id === data.id);
  if (!alreadyInWishlist) {
    DB.push(data);
    updateDB(DB);
  }
  return DB;
};

// const addToDB = data => {
//   if (!exists(data)) {
//     DB.push(data);
//     updateDB(DB);
//     return DB;
//   }
// };

const deleteFromDB = data => {
  DB = DB.filter(article => article.id !== data);
  updateDB(DB);
  return DB;
};

export const getWishlists = () => {
  return {
    type: GET_WISHLISTS,
    payload: DB
  };
};
export const addToWishlist = article => dispatch => {
  dispatch({
    type: ADD_TO_WISHLIST,
    payload: addToDB(DB, article)
  });
};

export const deleteWishlist = id => dispatch => {
  dispatch({
    type: DELETE_WISHLIST,
    payload: deleteFromDB(id)
  });
};

export const updateSearchTerm = text => {
  return {
    type: UPDATE_SEARCH_TERM,
    payload: text
  };
};

export const clearArticles = () => {
  return {
    type: SEARCH_BOX_CLEARED,
    payload: []
  };
};

export const getArticlesFromAPI = searchQuery => dispatch => {
  dispatch({ type: FETCH_STARTED });
  fetch(`${API}/${searchQuery}`)
    .then(response => response.json())
    .then(res => {
      // check if the search item exist in the api
      if (res.products.length > 0) {
        const productsData = res.products;
        dispatch({
          type: FETCH_COMPLETED,
          payload: productsData
        });
      } else {
        dispatch({
          type: NO_ITEM_FOUND
        });
        alert("No item found for searched word");
      }
    })
    .catch(err => {
      alert(errorMessage);
      dispatch({
        type: FETCH_FAILED,
        payload: err
      });
    });
};
