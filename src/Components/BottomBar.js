import React from "react";
import "./BottomBar.css";
import Map from "Media/map.svg";
import Home from "Media/home.svg";
import Basket from "Media/basket.png";
import { Link } from "react-router-dom";
import IsLoggedIn from "Hooks/IsLoggedIn";

function BottomBar() {
  IsLoggedIn();

  return (
    <div className="bottomBar">
      <Link to="/map">
        <img src={Map} alt="Map" title="Map" />
      </Link>
      <Link to="/">
        <img src={Home} alt="Home" title="Home" />
      </Link>
      <Link to="/offers">
        <img src={Basket} alt="Offers" title="Offers" />
      </Link>
    </div>
  );
}

export default BottomBar;
