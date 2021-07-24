import React from "react";
import {Link} from "react-router-dom";

import {IconContext} from "react-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link style={{textDecoration: "none"}} className="link" to="/">
        <img style={{width: "100%"}} src="Logo-white.svg" alt=""></img>
      </Link>
      <div>
        <Link style={{textDecoration: "none"}} to="/home">
          <span>Home</span>
        </Link>
        <Link style={{textDecoration: "none"}} to="/about">
          <span>Info</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
