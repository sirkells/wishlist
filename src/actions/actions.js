import {
  CHANGE_SEARCH_TERM,
  FETCH_COMPLETED,
  FETCH_FAILED,
  FETCH_STARTED,
  SEARCH_BOX_CLEARED,
  NO_ITEM_FOUND
} from "../constants";

const API = "https://www.adidas.co.uk/api/search/suggestions";

export const setSearchTerm = text => {
  return {
    type: CHANGE_SEARCH_TERM,
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
        console.log(productsData);
      } else {
        dispatch({
          type: NO_ITEM_FOUND
        });
        alert("No item found for searched word");
      }
    })
    .catch(err =>
      dispatch({
        type: FETCH_FAILED,
        payload: err.message
      })
    );
};
