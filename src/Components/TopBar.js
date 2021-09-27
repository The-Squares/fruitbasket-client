import React from "react";
import "./TopBar.css";
import Hamburger from "Media/hamburger.png";
import ShareIcon from "Media/shareicon.png";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div className="topBar">
      <Link to="/menu">
        <img src={Hamburger} alt="" />
      </Link>
  
      <p> Dashboard </p>

      <Link to="/share">
        <img src={ShareIcon} alt="" />
      </Link>
    </div>
  );
}

export default TopBar;
