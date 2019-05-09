import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Navbar is a higher order component
// other component are rendered under it as children
const Navbar = props => {
  return (
    <div>
      <div>
        <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
          <nav className="f6 ttu tracked ">
            <Link className="link dim white dib mr3 fw6" to="/">
              Search
            </Link>
            <Link className="link dim white dib mr3 fw6" to="/wishlist">
              Wishlist
            </Link>
            <Link className="link dim white dib mr3 fw6" to="/wishlist">
              Change Test
            </Link>
          </nav>
        </header>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {props.children}
    </div>
  );
};

export default Navbar;
