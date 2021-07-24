import React from "react";
import {GrUpdate} from "react-icons/gr";
import {IconContext} from "react-icons";

const Home = ({sendRequest, setSendRequest, items}) => {
  return (
    <div className="home">
      <div>
        <p>
          click the <GrUpdate /> button to generate a new activity
        </p>
        <button
          className="activities-btn"
          disabled={sendRequest}
          onClick={setSendRequest}
        >
          <IconContext.Provider value={{color: "blue", size: "30px"}}>
            <GrUpdate />
          </IconContext.Provider>
        </button>
      </div>

      <h1>{items.activity}</h1>
      {items.activity && (
        <div className="activities-details">
          <p>
            <b>Type: </b> {items.type}
          </p>
          <p>
            <b>Participants: </b> {items.participants}
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
