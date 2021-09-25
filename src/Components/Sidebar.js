import React from "react";
import "./Sidebar.css";
import SidebarItem from "Components/SidebarItem";
import Home from "Media/home.png";

function Sidebar() {
  return (
    <div className="SideBar">
      <SidebarItem image={Home} text={"Home"} />
      <SidebarItem image={Home} text={"Home"} />
      <SidebarItem image={Home} text={"Home"} />
      <SidebarItem image={Home} text={"Home"} />
      <SidebarItem image={Home} text={"Home"} />
    </div>
  );
}

export default Sidebar;
