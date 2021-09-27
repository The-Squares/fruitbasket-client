import React from "react";
import "./TopBar.css";
import Hamburger from "Media/hamburger.png";
import ShareIcon from "Media/shareicon.png";
import { Link } from "react-router-dom";

function TopBar({ page }) {
  return (
    <div className="topBar">
      <div className="headerLocation">
        <Link to="/menu">
          <img className="hamburger" src={Hamburger} alt="" />
        </Link>
        <p>{page}</p>
      </div>

      <Link to="/share">
        <img className="shareIcon" src={ShareIcon} alt="" />
      </Link>
    </div>
  );
}

export default TopBar;
