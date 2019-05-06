import React from "react";

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
        onClick={() => updateWishlist(data)}
      >
        <i className={`${iconType} icon`} />
        {title}
      </div>
    </div>
  );
};

export default Product;
