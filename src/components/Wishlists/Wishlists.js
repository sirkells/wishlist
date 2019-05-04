import React from "react";
import Product from "../Product/Product";

const WishLists = items => {
  const wishlistsArray = items.map(item => {
    return (
      <Product
        key={item.productid}
        displayName={item.displayName}
        imageURL={item.imageURL}
      />
    );
  });

  return <div>{wishlistsArray}</div>;
};

export default WishLists;
