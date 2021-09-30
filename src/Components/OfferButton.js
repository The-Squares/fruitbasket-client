import React from "react";
import Dots from "Media/dots.svg";
import "./OfferButton.css";
import { useHistory } from "react-router";

function OfferButton({ fruit_name, location, image_url }) {
  const history = useHistory();

  return (
    <div className="offerBBack">
      <img className="fruitImage" src={image_url} alt=""></img>
      <div className="offerBText">
        <p className="fruitName">{fruit_name}</p>
        <p>{location}</p>
      </div>
      <div className="offerBButton">
        <button>Request</button>
        <button onClick={() => history.push("/offers/1234")}>More Info</button>
      </div>
      <img className="dots" src={Dots} alt="" />
    </div>
  );
}

export default OfferButton;
