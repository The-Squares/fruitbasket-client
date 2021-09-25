import React from "react";
import "./BottomBar.css";
import Map from "Media/map.png";
import Home from "Media/home.png";
import Basket from "Media/basket.png";

function BottomBar() {
  return (
    <div className="bottomBar">
      <img src={Map} alt="" />
      <img src={Home} alt="" />
      <img src={Basket} alt="" />
    </div>
  );
}

export default BottomBar;
