import React from "react";
import {Link} from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <Link to="/home">
        <p>Get Started</p>
      </Link>
    </div>
  );
};

export default Homepage;
