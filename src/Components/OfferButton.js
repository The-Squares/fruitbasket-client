import React from "react";
import "./OfferButton.css";
import Image from "Media/appleplaceholder.png";

function OfferButton({ fruit_name, location, distance }) {
  return (
    <div className="offerBBack">
      <img src={Image} alt=""></img>
      <div className="offerBText">
        <p className="fruitName">{fruit_name}</p>
        <p>{location}</p>
        <p>{distance}</p>
      </div>
      <div className="offerBButton">
        <button>Request Apple</button>
        <button>View Offerer Info</button>
      </div>
    </div>
  );
}

export default OfferButton;
