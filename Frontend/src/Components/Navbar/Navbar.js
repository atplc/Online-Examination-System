import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-containers">
      <div className="nav-items">
        <p>
          <Link to="/">HOME</Link>
        </p>
      </div>
      <div className="nav-items">
        <p>
          <Link to="/">ABOUT</Link>
        </p>
      </div>
      <div className="nav-items">
        <p>
          <Link to="/">CONTACT</Link>
        </p>
      </div>
      <div className="nav-items">
        <p>
          <Link to="/signup">SIGN UP</Link>/<Link to="/">LOG IN</Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
