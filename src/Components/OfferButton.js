import React, { useRef, useState } from "react";
import Dots from "Media/dots.svg";
import "./OfferButton.css";
import { useHistory } from "react-router";
import useOutsideClick from "Hooks/useOutsideClick";

function OfferButton({ fruit_name, location, image_url }) {
  let [menuActive, toggleMenu] = useState(false);
  const history = useHistory();

  let handleOutsideClick = () => {
    toggleMenu(false);
  };

  let menuRef = useRef(null);
  useOutsideClick(menuRef, handleOutsideClick);

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
      <img
        className="dots"
        src={Dots}
        alt=""
        onClick={() => toggleMenu(!menuActive)}
      />
      <div
        className="dotMenu"
        style={menuActive ? {} : { display: "none" }}
        ref={menuRef}
      >
        <p>edit</p>
        <p>delete</p>
        <p>bookmark</p>
      </div>
    </div>
  );
}

export default OfferButton;
