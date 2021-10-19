import React from "react";
import "./Offers.css";
import OfferButton from "Components/OfferButton";
import useOffers from "Hooks/useOffers";
import TopBar from "Components/TopBar";
import useSearch from "Hooks/useSearch";

function Offers() {
  let [searchResults, changeTerm] = useSearch();
  let offers = useOffers(searchResults);

  return (
    <div className="Offers">
      <TopBar page="Offers" />
      <div className="offerButtons">
        <form
          // @ts-ignore
          onSubmit={changeTerm}
        >
          <input type="text" placeholder="Search by fruit name..." />
        </form>
        {offers.map((offer) => (
          <OfferButton
            fruit_name={offer.fruit_type}
            location={offer.address}
            image_url={offer.picture_url}
            offer_id={offer._id}
            key={offer._id}
          />
        ))}
      </div>
    </div>
  );
}

export default Offers;
