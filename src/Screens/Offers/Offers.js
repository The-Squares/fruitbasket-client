import React from "react";
import "./Offers.css";
import OfferButton from "Components/OfferButton";
import BottomBar from "Components/BottomBar";

function Offers() {
  return (
    <div className="Offers">
      <div className="offerButtons">
        <form>
          <input type="text" placeholder="Search by fruit name..." />
        </form>
        {new Array(20).fill(
          <OfferButton
            fruit_name="Apples"
            location="Beverly Hills - CA"
            distance="5 minutes away"
          />
        )}
      </div>
      <BottomBar></BottomBar>
    </div>
  );
}

export default Offers;
