import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BottomBar from "Components/BottomBar";
import Home from "Screens/Home/Home";
import Offers from "Screens/Offers/Offers";
import "./App.css";
import Map from "Screens/Map/MapScreen";
import CreateOffer from "Screens/CreateOffer/CreateOffer";
import Offer from "Screens/Offer/Offer";
import Login from "Screens/Login/Login";
import Signup from "Screens/Signup/Signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/offers" exact component={Offers} />
        <Route path="/map" exact component={Map} />
        <Route path="/create-offer" exact component={CreateOffer} />
        <Route path="/offers/:offerid" exact component={Offer} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
      <Route
        // @ts-ignore
        path="/(|offers|map|create-offer|/offers/:offerid|settings|seller-profile)"
        component={BottomBar}
      />
    </Router>
  );
}

export default App;
