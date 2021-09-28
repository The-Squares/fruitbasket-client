import React from "react";
import "./Home.css";
import OfferButton from "Components/OfferButton";
import Apple from "Media/appleplaceholder.png";
import TopBar from "Components/TopBar";

function Home({ history }) {
  return (
    <div className="Home">
      <TopBar page="Dashboard" />
      <p onClick={() => history.push("/offers")} className="headers">
        Offers
      </p>

      <div className="homeButtons">
        <OfferButton
          fruit_name="Apples"
          location="Beverly Hills - CA"
          image_url={Apple}
        ></OfferButton>
        <OfferButton
          fruit_name="Orages"
          location="Beverly Hills - CA"
          image_url={Apple}
        ></OfferButton>
        <OfferButton
          fruit_name="Bananas"
          location="Beverly Hills - CA"
          image_url={Apple}
        ></OfferButton>
      </div>
    </div>
  );
}

export default Home;
