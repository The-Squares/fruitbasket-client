import React from "react";
import "./Home.css";
import OfferButton from "Components/OfferButton";
import TopBar from "Components/TopBar";
import useBookmarks from "Hooks/useBookmarks";

function Home({ history }) {
  let bookmarks = useBookmarks();

  return (
    <div className="Home">
      <TopBar page="Dashboard" />
      <p onClick={() => history.push("/offers")} className="headers">
        Offers
      </p>

      <div className="homeButtons">
        {bookmarks.map((bookmark) => (
          <OfferButton
            fruit_name={bookmark.fruit_name}
            location={bookmark.location}
            image_url={bookmark.image_url}
            offer_id={bookmark.offer_id}
            key={bookmark.offer_id}
          ></OfferButton>
        ))}
      </div>
    </div>
  );
}

export default Home;
