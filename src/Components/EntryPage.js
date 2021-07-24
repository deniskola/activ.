import React from "react";
import {Link} from "react-router-dom";
import Icon from "./Icon";

const EntryPage = () => {
  return (
    <div className="entry-page">
      <p>If you are bored try or challenge yourself with a new activity</p>
      <Icon className="icon" />
      <Link to="/home">
        <button></button>
      </Link>
    </div>
  );
};

export default EntryPage;
