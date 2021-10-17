import React from "react";
import "./Offer.css";
import TopBar from "Components/TopBar";
import OfferContent from "Components/OfferContent";
import useOffer from "Hooks/useOffer";

function Offer() {
  let offer = useOffer();

  return (
    <div className="Offer">
      <TopBar page="Offer"></TopBar>
      <OfferContent offer={offer}></OfferContent>
    </div>
  );
}

export default Offer;
