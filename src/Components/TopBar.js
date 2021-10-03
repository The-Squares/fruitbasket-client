import React, { useState } from "react";
import "./TopBar.css";
import { ReactComponent as Hamburger } from "Media/hamburger.svg";
import { ReactComponent as Plus } from "Media/plus.svg";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function TopBar({ page }) {
  let [sideBarActive, setActive] = useState(false);

  return (
    <div className="topBar">
      <Sidebar active={sideBarActive} />
      <div className="headerLocation">
        <Hamburger
          className="hamburger"
          // @ts-ignore
          alt="Sidebar"
          title="Sidebar"
          style={
            sideBarActive
              ? { fill: "#602700", stroke: "#602700" }
              : { fill: "#E37547", stroke: "#E37547" }
          }
          onClick={() => setActive(!sideBarActive)}
        />
        <p className="topBarText">{page}</p>
      </div>

      <Link to="/create-offer">
        <Plus
          className="plusIcon"
          style={{ fill: "white" }}
          // @ts-ignore
          alt="Create offer"
          title="Create offer"
        />
      </Link>
    </div>
  );
}

export default TopBar;
