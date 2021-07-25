import React from "react";
import {Link} from "react-router-dom";

const EntryPage = () => {
  return (
    <div className="entry-page">
      <p>If you are bored try or challenge yourself with a new activity</p>
      <img src="entry-page-img.svg" alt=""></img>
      <Link to="/home">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default EntryPage;
