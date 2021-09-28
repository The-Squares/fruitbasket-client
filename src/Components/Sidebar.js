import React from "react";
import "./Sidebar.css";
import SidebarItem from "Components/SidebarItem";
import Home from "Media/home.png";

function Sidebar({ active }) {
  let style = active ? { display: "block" } : { display: "none " };

  return (
    <div className="SideBar" style={style}>
      <SidebarItem image={Home} text={"Home"} />
      <SidebarItem image={Home} text={"Home"} />
      <SidebarItem image={Home} text={"Home"} />
      <SidebarItem image={Home} text={"Home"} />
      <SidebarItem image={Home} text={"Home"} />
    </div>
  );
}

export default Sidebar;
