import "./App.css";
import React, {useState, useEffect} from "react";
import Navbar from "./Components/NavBar";
import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Home from "./Components/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [items, setItems] = useState([]);

  const [sendRequest, setSendRequest] = useState(false);
  const url = "http://www.boredapi.com/api/activity/";

  useEffect(() => {
    if (sendRequest) {
      getItems();
      setSendRequest(false);
    }
  }, [sendRequest]);

  async function getItems() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setItems(data);
  }

  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={Homepage} />
        <Route
          path={"/(.+)"}
          render={() => (
            <>
              <Navbar />
              <Switch>
                <Route
                  path="/home"
                  component={() => (
                    <Home
                      sendRequest={sendRequest}
                      setSendRequest={() => setSendRequest(true)}
                      activity={items.activity}
                    />
                  )}
                />
                <Route path="/about" component={About} />
              </Switch>
            </>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
