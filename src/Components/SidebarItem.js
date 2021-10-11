import React from "react";
import "./SidebarItem.css";

function SidebarItem({ image, text }) {
  return (
    <div className="SidebarItem">
      <div className="sidebarImage">
        <img src={image} alt="" />
      </div>
      <p>{text}</p>
    </div>
  );
}

export default SidebarItem;
