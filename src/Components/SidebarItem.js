import React from "react";
import { useHistory } from "react-router";
import "./SidebarItem.css";

function SidebarItem({ image, text, path }) {
  let history = useHistory();

  return (
    <div className="SidebarItem" onClick={() => history.push(path)}>
      <div className="sidebarImage">
        <img src={image} alt="" />
      </div>
      <p>{text}</p>
    </div>
  );
}

export default SidebarItem;
