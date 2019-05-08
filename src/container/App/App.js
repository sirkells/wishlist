import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import Products from "../../components/Products/Products";

import {
  updateSearchTerm,
  getArticlesFromAPI,
  clearArticles,
  addToWishlist,
  deleteWishlist
} from "../../actions/actions";

const mapStateToProps = state => {
  return {
    searchTerm: state.updateSearchTerm.searchTerm,
    articles: state.searchArticles.articles,
    errorMessage: state.searchArticles.errorMessage,
    DB: state.updateWishlist.wishlistDB
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSearchTerm: event => dispatch(updateSearchTerm(event.target.value)),
    getArticlesData: searchTerm => dispatch(getArticlesFromAPI(searchTerm)),
    clearArticles: () => dispatch(clearArticles()),
    addToWishlist: data => dispatch(addToWishlist(data)),
    deleteWishlist: data => dispatch(deleteWishlist(data))
  };
};

class App extends Component {
  searchArticles = () => {
    const { searchTerm, getArticlesData, clearArticles } = this.props;
    searchTerm.length === 0 ? clearArticles() : getArticlesData(searchTerm);
  };

  // updateWishlist = id => this.props.addToWishlist(id);

  render() {
    const { articles, updateSearchTerm, addToWishlist } = this.props;
    const { searchArticles } = this;
    return (
      <div className="ui container App">
        <SearchBar update={updateSearchTerm} search={searchArticles} />
        <br />
        <br />
        <Products articles={articles} addToWishlist={addToWishlist} />
      </div>
    );
  }
}

const connectProps = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default connectProps(App);
