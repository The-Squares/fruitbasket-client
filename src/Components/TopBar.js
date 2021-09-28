import React, { useState } from "react";
import "./TopBar.css";
import Hamburger from "Media/hamburger.png";
import ShareIcon from "Media/shareicon.png";
import Sidebar from "./Sidebar";

function TopBar({ page }) {
  let [sideBarActive, setActive] = useState(false);

  return (
    <div className="topBar">
      <Sidebar active={sideBarActive} />
      <div className="headerLocation">
        <img
          className="hamburger"
          src={Hamburger}
          alt=""
          onClick={() => setActive(!sideBarActive)}
        />
        <p className="topBarText">{page}</p>
      </div>

      <img className="shareIcon" src={ShareIcon} alt="" />
    </div>
  );
}

export default TopBar;
