import React from "react";
// import { Card, Icon, Image } from "semantic-ui-react";
const store = [];
const Product = ({ displayName, imageURL }) => {
  const addWishlist = () => {
    const data = { displayName: displayName, imageURL: imageURL };
    store.push(data);
    // console.log(store);
    localStorage.setItem("data", JSON.stringify(store));
  };
  return (
    <div className="ui card">
      <div className="image">
        <img src={imageURL} className="ui image" alt="product" />
      </div>
      <div className="content">
        <div className="header">{displayName}</div>
      </div>
      <div className="ui bottom attached green button" onClick={addWishlist}>
        <i className="add icon" />
        Add to Wishlist
      </div>
    </div>
  );
};

export default Product;
