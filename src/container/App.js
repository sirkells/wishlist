import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import SearchBar from "../components/SearchBar/SearchBar";
import Products from "../components/Products/Products";
import Wishlists from "../components/Wishlists/Wishlists";
import {
  setSearchTerm,
  getArticlesFromAPI,
  clearArticles,
  addToWishlist,
  deleteWishlist,
  getWishlists
} from "../actions/actions";
// import Wishlists from '../components/Wishlists/Wishlists'

const mapStateToProps = state => {
  return {
    searchTerm: state.changeSearchTerm.searchTerm,
    articles: state.searchArticles.articles,
    isLoading: state.searchArticles.isLoading,
    hasFailed: state.searchArticles.hasFailed,
    errorMessage: state.searchArticles.errorMessage,
    DB: state.updateWishlist.wishlistDB
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSearchTerm: event => dispatch(setSearchTerm(event.target.value)),
    getArticlesData: searchTerm => dispatch(getArticlesFromAPI(searchTerm)),
    clearArticles: () => dispatch(clearArticles()),
    addToWishlist: data => dispatch(addToWishlist(data)),
    deleteWishlist: data => dispatch(deleteWishlist(data)),
    getWishlists: () => dispatch(getWishlists())
  };
};

class App extends Component {
  searchArticles = () => {
    const { searchTerm, getArticlesData, clearArticles } = this.props;
    searchTerm.length === 0 ? clearArticles() : getArticlesData(searchTerm);
  };

  updateWishlist = id => this.props.addToWishlist(id);

  render() {
    const { articles, updateSearchTerm, getWishlists } = this.props;
    const { searchArticles, updateWishlist } = this;
    return (
      <div className="App">
        <br />
        <br />
        <br />
        <br />
        <button
          onClick={() => {
            localStorage.clear();
            getWishlists();
          }}
        >
          clear
        </button>

        <SearchBar update={updateSearchTerm} search={searchArticles} />
        <br />
        <Wishlists updateWishlist={updateWishlist} />
        <br />
        <Products items={articles} updateWishlist={updateWishlist} />
      </div>
    );
  }
}

const connectProps = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default connectProps(App);
