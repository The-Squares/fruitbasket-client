import React from "react";
import "./Home.css";
import OfferButton from "Components/OfferButton";
import Sidebar from "Components/Sidebar";

function Home() {
  return (
    <div className="Home">
      <p className="headers">Offers</p>
      <Sidebar></Sidebar>
      <div className="homeButtons">
        <OfferButton
          fruit_name="Apples"
          location="Beverly Hills - CA"
          distance="5 minutes away"
        ></OfferButton>
        <OfferButton
          fruit_name="Orages"
          location="Beverly Hills - CA"
          distance="10 minutes away"
        ></OfferButton>
        <OfferButton
          fruit_name="Bananas"
          location="Beverly Hills - CA"
          distance="20 minutes away"
        ></OfferButton>
      </div>
    </div>
  );
}

export default Home;
