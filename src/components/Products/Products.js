import React from "react";
import Product from "../Product/Product";

const Products = ({ articles, addToWishlist }) => {
  const productLists = articles.map(article => {
    return (
      <Product
        key={article.productid}
        id={article.productid}
        displayName={article.displayName}
        imageURL={article.imageURL}
        updateWishlist={addToWishlist}
        actionType="add"
        iconType={"add"}
        title={"Add to Wishlist"}
        color={"green"}
      />
    );
  });
  return <div className="ui centered cards">{productLists}</div>;
};

export default Products;

// import { connect } from "react-redux";
// import { addToWishlist } from "../../actions/actions";

// const mapStateToProps = state => {
//   return {
//     DB: state.updateWishlist.wishlistDB
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     addToWishlist: data => dispatch(addToWishlist(data))
//   };
// };

// class Products extends Component {
//   state = {};
//   updateWishlist = data => this.props.addToWishlist(data);

//   render() {
//     const { items } = this.props;
//     const productLists = items.map(item => {
//       return (
//         <Product
//           key={item.productid}
//           id={item.productid}
//           displayName={item.displayName}
//           imageURL={item.imageURL}
//           addToWishlist={this.updateWishlist}
//           iconType={"add"}
//           title={"Add to Wishlist"}
//           color={"green"}
//         />
//       );
//     });
//     return <div className="ui centered cards">{productLists}</div>;
//   }
// }

// const connectProps = connect(
//   mapStateToProps,
//   mapDispatchToProps
// );
// export default connectProps(Products);
