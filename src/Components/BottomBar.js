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
        <img src={Map} alt="" />
      </Link>
      <Link to="/">
        <img src={Home} alt="" />
      </Link>
      <Link to="/offers">
        <img src={Basket} alt="" />
      </Link>
    </div>
  );
}

export default BottomBar;
