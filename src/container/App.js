import React, { Component } from "react";
import "./App.css";
import SearchBar from "../components/SearchBar/SearchBar";
import Products from "../components/Products/Products";
// import Wishlists from '../components/Wishlists/Wishlists'

const API = "https://www.adidas.co.uk/api/search/suggestions";

class App extends Component {
  state = {
    articles: [],
    searchTerm: ""
  };

  updateSearchTerm = event => {
    const term = event.target.value;
    this.setState({
      searchTerm: term
    });
  };

  clearArticles = () => {
    this.setState({
      articles: []
    });
  };

  searchArticles = () => {
    const { searchTerm } = this.state;
    searchTerm.length === 0
      ? this.clearArticles()
      : this.getArticlesFromAPI(searchTerm);
  };

  getArticlesFromAPI = searchQuery => {
    fetch(`${API}/${searchQuery}`)
      .then(response => response.json())
      .then(res => {
        // check if the search item exist in the api
        if (res.products.length > 0) {
          const productsData = res.products;
          console.log(productsData);
          this.setState({ articles: productsData });
          console.log(this.state.articles);
        } else {
          this.clearArticles();
          alert("No articles found for the search query");
        }
      })
      .catch(err => alert(err.message));
  };
  render() {
    return (
      <div className="App">
        <br />
        <SearchBar
          update={this.updateSearchTerm}
          search={this.searchArticles}
        />
        <br />
        <br />
        <Products items={this.state.articles} />
      </div>
    );
  }
}

export default App;
