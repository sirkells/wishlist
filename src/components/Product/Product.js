import React from "react";
// import { Card, Icon, Image } from "semantic-ui-react";

const Product = ({ displayName, imageURL }) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={imageURL} className="ui image" alt="product" />
      </div>
      <div className="content">
        <div className="header">{displayName}</div>
      </div>
      <div className="ui bottom attached green button">
        <i className="add icon" />
        Add to Wishlist
      </div>
    </div>
  );
};

export default Product;
