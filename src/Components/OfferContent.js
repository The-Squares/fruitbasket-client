import React from "react";
import "./OfferContent.css";
import Apple from "Media/aspectratio.png";

function OfferContent() {
  return (
    <div className="OfferContent">
      <img src={Apple} alt="" />
      <p className="fruitType">Apples</p>
      <div className="offerDescrip dropshadow">
        Juicy apples grown in an authentic Sonoma CA backyard! Email me for
        pickup address.
      </div>
      <div className="offerWrap">
        <div className="priceWrap">
          <div className="offerPrice dropshadow">
            <p>
              Price: <span>Free!</span>
            </p>
          </div>
          <div className="offerOrganic dropshadow">
            <p>Organic?</p>
            <p>Yes~!</p>
          </div>
        </div>
        <div className="offerRemaining dropshadow">
          <p className="remainHead">
            Quantity <br />
            Remaining
          </p>
          <p className="remaining">19</p>
        </div>
      </div>
      <div className="sellerInfo">
        <p className="sellerHead">Contact Seller</p>
        <div className="sellerMore dropshadow">
          <p className="sellerEmail">
            Email: <span>camasher22@gmail.com</span>
          </p>
          <p className="sellerAddress">
            Address: <span>312 S Crescent Drive</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OfferContent;
