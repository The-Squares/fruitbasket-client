import React from "react";
import "./OfferContent.css";

function OfferContent({ offer }) {
  return (
    <div className="OfferContent">
      <img src={offer.picture_url} alt="" />
      <p className="fruitType">{offer?.fruit_type}</p>
      <div className="offerDescrip dropshadow">{offer?.description}</div>
      <div className="offerWrap">
        <div className="priceWrap">
          <div className="offerPrice dropshadow">
            <p>
              Price: <span>Free!</span>
            </p>
          </div>
          <div className="offerOrganic dropshadow">
            <p>Organic?</p>
            <p>{offer?.organic ? "Yes!" : "No!"}</p>
          </div>
        </div>
        <div className="offerRemaining dropshadow">
          <p className="remainHead">
            Quantity <br />
            Remaining
          </p>
          <p className="remaining">{offer?.remaining}</p>
        </div>
      </div>
      <div className="sellerInfo">
        <p className="sellerHead">Contact Seller</p>
        <div className="sellerMore dropshadow">
          <p className="sellerEmail">
            Email: <span>{offer?.user?.email}</span>
          </p>
          <p className="sellerAddress">
            Address: <span>{offer?.address}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OfferContent;
