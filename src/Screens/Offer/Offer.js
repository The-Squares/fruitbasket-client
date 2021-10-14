import React from "react";
import "./Offer.css";
import TopBar from "Components/TopBar";
import { useParams } from "react-router-dom";
import OfferContent from "Components/OfferContent";

function Offer({ history }) {
  // @ts-ignore
  let { offerid } = useParams();

  return (
    <div className="Offer">
      <TopBar page="Offer"></TopBar>
      <OfferContent></OfferContent>
    </div>
  );
}

export default Offer;
