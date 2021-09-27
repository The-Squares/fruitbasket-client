import React from "react";
import "./OfferButton.css";

function OfferButton({ fruit_name, location, image_url }) {
  return (
    <div className="offerBBack">
      <img src={image_url} alt=""></img>
      <div className="offerBText">
        <p className="fruitName">{fruit_name}</p>
        <p>{location}</p>
      </div>
      <div className="offerBButton">
        <button>Request</button>
        <button>More Info</button>
      </div>
    </div>
  );
}

export default OfferButton;
