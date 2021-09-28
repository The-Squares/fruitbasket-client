import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BottomBar from "Components/BottomBar";
import Home from "Screens/Home/Home";
import Offers from "Screens/Offers/Offers";
import "./App.css";
import Map from "Screens/Map/MapScreen";
import CreateOffer from "Screens/CreateOffer/CreateOffer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/offers" exact component={Offers} />
        <Route path="/map" exact component={Map} />
        <Route path="/create-offer" exact component={CreateOffer} />
      </Switch>
      <BottomBar></BottomBar>
    </Router>
  );
}

export default App;
