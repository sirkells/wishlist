import React from "react";
// import { Card, Icon, Image } from "semantic-ui-react";
const Product = props => {
  const {
    imageURL,
    displayName,
    id,
    updateWishlist,
    actionType,
    iconType,
    title,
    color
  } = props;
  const data =
    actionType === "add"
      ? { imageURL: imageURL, displayName: displayName, id: id }
      : id;

  return (
    <div className="ui card">
      <div className="image">
        <img src={imageURL} className="ui image" alt="product" />
      </div>
      <div className="content">
        <div className="header">{displayName}</div>
      </div>
      <div
        className={`ui bottom attached ${color} button`}
        onClick={() => updateWishlist(actionType, data)}
      >
        <i className={`${iconType} icon`} />
        {title}
      </div>
      {console.log()}
    </div>
  );
};

export default Product;
