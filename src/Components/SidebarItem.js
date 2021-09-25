import React from "react";
import "./SidebarItem.css";

function SidebarItem({ image, text }) {
  return (
    <div className="SidebarItem">
      <img src={image} alt="" />
      <p>{text}</p>
    </div>
  );
}

export default SidebarItem;
