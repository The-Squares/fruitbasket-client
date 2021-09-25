import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "Screens/Home/Home";
import Offers from "Screens/Offers/Offers";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/offers" exact component={Offers} />
      </Switch>
    </Router>
  );
}

export default App;
