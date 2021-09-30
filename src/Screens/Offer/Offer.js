import React from "react";
import "./Offer.css";
import TopBar from "Components/TopBar";
import { useParams } from "react-router-dom";

function Offer({ history }) {
  // @ts-ignore
  let { offerid } = useParams();

  return (
    <div className="Offer">
      <TopBar page="Offer" />
      <div className="offerDetails">
        <p>{offerid}</p>
      </div>
    </div>
  );
}

export default Offer;
