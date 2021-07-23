import React from "react";
import {Link} from "react-router-dom";

const Home = ({sendRequest, setSendRequest, activity}) => {
  return (
    <div className="home">
      <button disabled={sendRequest} onClick={setSendRequest}></button>
      <h1>{activity}</h1>
    </div>
  );
};

export default Home;
