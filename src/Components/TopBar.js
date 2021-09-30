import React, { useState } from "react";
import "./TopBar.css";
import Hamburger from "Media/hamburger.png";
import { ReactComponent as Plus } from "Media/plus.svg";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function TopBar({ page }) {
  let [sideBarActive, setActive] = useState(false);

  return (
    <div className="topBar">
      <Sidebar active={sideBarActive} />
      <div className="headerLocation">
        <img
          className="hamburger"
          src={Hamburger}
          alt="Sidebar"
          title="Sidebar"
          onClick={() => setActive(!sideBarActive)}
        />
        <p className="topBarText">{page}</p>
      </div>

      <Link to="/create-offer">
        <Plus
          className="plusIcon"
          style={{ fill: "white" }}
          alt="Create offer"
          title="Create offer"
        />
      </Link>
    </div>
  );
}

export default TopBar;
