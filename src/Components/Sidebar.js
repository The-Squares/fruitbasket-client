import React from "react";
import "./Sidebar.css";
import SidebarItem from "Components/SidebarItem";
import Offers from "Media/offers.png";
import SellerProfile from "Media/sellerprofile.png";
import Map from "Media/map.svg";
import Settings from "Media/settings.svg";

function Sidebar({ active }) {
  let style = active ? { display: "block" } : { display: "none " };

  return (
    <div className="SideBar" style={style}>
      <SidebarItem image={Offers} text={"Offers"} />
      <SidebarItem image={SellerProfile} text={"Seller Profile"} />
      <SidebarItem image={Map} text={"Map"} />
      <SidebarItem image={Settings} text={"Settings"} />
    </div>
  );
}

export default Sidebar;
