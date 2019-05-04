import React from "react";
import Product from "../Product/Product";

const Products = ({ items }) => {
  const productLists = items.map(item => {
    return (
      <Product
        key={item.productid}
        displayName={item.displayName}
        imageURL={item.imageURL}
      />
    );
  });
  return <div className="ui centered cards">{productLists}</div>;
};

export default Products;
