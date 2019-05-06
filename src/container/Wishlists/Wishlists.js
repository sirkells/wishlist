import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteWishlist,
  getWishlists,
  addToWishlist
} from "../../actions/actions";
import Product from "../../components/Product/Product";

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
  // updateWishlist = id => this.props.deleteWishlist(id);
  render() {
    const { wishlistDB, deleteWishlist } = this.props;
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
          updateWishlist={deleteWishlist}
          actionType="delete"
        />
      );
    });
    return (
      <div className="ui container">
        {wishlistDB.length > 0 ? (
          <button
            className="ui red button"
            onClick={() => {
              localStorage.clear();
              this.props.getWishlists();
            }}
          >
            Remove All
          </button>
        ) : (
          <div>
            <h2>You currently have no wishes...</h2>
            <button className="ui button">
              <Link to="/">Make a Wish</Link>
            </button>
          </div>
        )}
        <br />
        <br />
        <div className="ui centered cards">{wishlistsArray}</div>
      </div>
    );
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
