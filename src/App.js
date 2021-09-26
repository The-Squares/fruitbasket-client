import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BottomBar from "Components/BottomBar";
import Home from "Screens/Home/Home";
import Offers from "Screens/Offers/Offers";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/offers" exact component={Offers} />
        </Switch>
        <BottomBar></BottomBar>
      </Router>
    </>
  );
}

export default App;
