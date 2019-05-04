import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import SearchBar from "../components/SearchBar/SearchBar";
import Products from "../components/Products/Products";
import {
  setSearchTerm,
  getArticlesFromAPI,
  clearArticles
} from "../actions/actions";
// import Wishlists from '../components/Wishlists/Wishlists'

const mapStateToProps = state => {
  return {
    searchTerm: state.changeSearchTerm.searchTerm,
    articles: state.searchArticles.articles,
    isLoading: state.searchArticles.isLoading,
    hasFailed: state.searchArticles.hasFailed,
    errorMessage: state.searchArticles.errorMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSearchTerm: event => dispatch(setSearchTerm(event.target.value)),
    getArticlesData: searchTerm => dispatch(getArticlesFromAPI(searchTerm)),
    clearArticles: () => dispatch(clearArticles())
  };
};
class App extends Component {
  searchArticles = () => {
    const { searchTerm, getArticlesData, clearArticles } = this.props;
    searchTerm.length === 0 ? clearArticles() : getArticlesData(searchTerm);
  };

  render() {
    const { articles, updateSearchTerm } = this.props;
    return (
      <div className="App">
        <br />
        <br />
        <SearchBar update={updateSearchTerm} search={this.searchArticles} />
        <br />
        <br />
        <Products items={articles} />
      </div>
    );
  }
}

const connectProps = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default connectProps(App);
