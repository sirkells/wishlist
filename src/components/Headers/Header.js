import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

// the Header takes a child component as a prop
// the component is placed in between the tags wherever the header component is used
const Header = props => {
  return (
    // header is made a higher order component
    // other component are rendered under it as children
    <div>
      <div>
        {/* <h3 className="links">
          <Link to="/">Home</Link>
        </h3>
        <h3 className="links">
          <Link to="/jokes">Jokes</Link>
        </h3>
        <h3 className="links">
          <Link to="/musicaly">Musicaly</Link>
        </h3> */}
        <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
          <nav className="f6 ttu tracked ">
            <Link className="link dim white dib mr3 fw6" to="/">
              Home
            </Link>
            <Link className="link dim white dib mr3 fw6" to="/wishlist">
              Wishlist
            </Link>
          </nav>
        </header>
      </div>

      {props.children}
    </div>
  );
};

export default Header;
