import React from "react";
import "./BottomBar.css";
import Map from "Media/map.png";
import Home from "Media/home.png";
import Basket from "Media/basket.png";
import { Link } from "react-router-dom";

function BottomBar() {
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
