import React, { useRef, useState } from "react";
import Dots from "Media/dots.svg";
import "./OfferButton.css";
import { useHistory } from "react-router";
import useOutsideClick from "Hooks/useOutsideClick";

function OfferButton({ fruit_name, location, image_url, offer_id }) {
  let [menuActive, toggleMenu] = useState(false);
  const history = useHistory();

  let handleOutsideClick = () => {
    toggleMenu(false);
  };

  let menuRef = useRef(null);
  useOutsideClick(menuRef, handleOutsideClick);

  let bookmarkOffer = () => {
    let bookmarkString = localStorage.getItem("bookmarks") || "{}";
    let bookmarks = JSON.parse(bookmarkString);
    bookmarks[offer_id] = {
      fruit_name: fruit_name,
      location: location,
      image_url: image_url,
      offer_id: offer_id,
    };
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  };

  return (
    <div className="offerBBack">
      <img className="fruitImage" src={image_url} alt=""></img>
      <div className="offerBText">
        <p className="fruitName">{fruit_name}</p>
        <p>{location}</p>
      </div>
      <div className="offerBButton">
        <button>Request</button>
        <button onClick={() => history.push(`/offers/${offer_id}`)}>
          More Info
        </button>
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
        <p onClick={bookmarkOffer}>bookmark</p>
      </div>
    </div>
  );
}

export default OfferButton;
