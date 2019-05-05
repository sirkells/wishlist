import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteWishlist,
  getWishlists,
  addToWishlist
} from "../../actions/actions";
import Product from "../Product/Product";

const mapStateToProps = state => {
  return {
    wishlistDB: state.updateWishlist.wishlistDB
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteWishlist: id => dispatch(deleteWishlist(id)),
    getWishlists: () => dispatch(getWishlists()),
    addToWishlist: data => dispatch(addToWishlist(data))
  };
};

class WishLists extends Component {
  state = {};
  componentDidMount() {
    const { getWishlists } = this.props;
    getWishlists();
  }
  updateWishlist = id => this.props.deleteWishlist(id);
  render() {
    const { wishlistDB } = this.props;
    const wishlistsArray = wishlistDB.map(item => {
      return (
        <Product
          key={item.id}
          id={item.id}
          displayName={item.displayName}
          imageURL={item.imageURL}
          iconType={"trash alternate outline"}
          color={"red"}
          title={"Remove from Wishlists"}
          updateWishlist={this.updateWishlist}
          actionType="delete"
        />
      );
    });
    return <div className="ui centered cards">{wishlistsArray}</div>;
  }
}
const connectProps = connect(
  mapStateToProps,
  mapDispatchToProps
);
export default connectProps(WishLists);

// const WishLists = ({ items, updateWishlist }) => {
//   const wishlistsArray = items.map(item => {
//     return (
//       <Product
//         key={item.id}
//         id={item.id}
//         displayName={item.displayName}
//         imageURL={item.imageURL}
//         iconType={"trash alternate outline"}
//         color={"red"}
//         title={"Remove from Wishlists"}
//         updateWishlist={updateWishlist}
//         actionType="delete"
//       />
//     );
//   });

//   return <div className="ui centered cards">{wishlistsArray}</div>;
// };

// export default WishLists;
