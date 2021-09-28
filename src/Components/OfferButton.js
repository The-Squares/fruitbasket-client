import React from "react";
import Dots from "Media/dots.svg";
import "./OfferButton.css";

function OfferButton({ fruit_name, location, image_url }) {
  return (
    <div className="offerBBack">
      <img className="fruitImage" src={image_url} alt=""></img>
      <div className="offerBText">
        <p className="fruitName">{fruit_name}</p>
        <p>{location}</p>
      </div>
      <div className="offerBButton">
        <button>Request</button>
        <button>More Info</button>
      </div>
      <img className="dots" src={Dots} alt="" />
    </div>
  );
}

export default OfferButton;
