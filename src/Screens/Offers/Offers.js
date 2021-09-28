import React from "react";
import "./Offers.css";
import OfferButton from "Components/OfferButton";
import useOffers from "Hooks/useOffers";
import TopBar from "Components/TopBar";
import { ReactComponent as Plus } from "Media/plus.svg";
import { Link } from "react-router-dom";

function Offers({ history }) {
  let offers = useOffers();

  return (
    <div className="Offers">
      <TopBar page="Offers" />
      <Link to="/create-offer">
        <Plus className="plusIcon" style={{ fill: "white" }} />
      </Link>
      <div className="offerButtons">
        <form>
          <input type="text" placeholder="Search by fruit name..." />
        </form>
        {offers.map((offer) => (
          <OfferButton
            fruit_name={offer.fruit_type}
            location={offer.address}
            image_url={offer.picture_url}
          />
        ))}
      </div>
    </div>
  );
}

export default Offers;
