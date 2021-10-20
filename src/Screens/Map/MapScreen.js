import React from "react";
import useGeolocation from "Hooks/useGeolocation";
import "./MapScreen.css";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import useGeoOffers from "Hooks/useGeoOffers";
import useFoodbanks from "Hooks/useFoodbanks";

const libraries = [];

function Map({ history }) {
  let [lat, long] = useGeolocation();
  let offers = useGeoOffers(lat, long);
  let foodbanks = useFoodbanks();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    // @ts-ignore
    libraries: libraries,
  });

  if (loadError) {
    console.log(loadError);
    return <p>"Error"</p>;
  }
  if (!isLoaded) return <p>"Loading..."</p>;

  return (
    <div className="Map">
      <GoogleMap
        id="map"
        mapContainerStyle={{ width: "100%", height: "100%" }}
        zoom={15}
        center={{ lat: lat, lng: long }}
        options={{ zoomControl: true, disableDefaultUI: true }}
      >
        {offers.map((offer) => {
          return (
            offer && (
              <Marker
                key={`${offer.location.coordinates[1]}-${offer.location.coordinates[0]}`}
                position={{
                  lat: offer.location.coordinates[1],
                  lng: offer.location.coordinates[0],
                }}
                onClick={() => history.push(`/offers/${offer._id}`)}
              ></Marker>
            )
          );
        })}
        {foodbanks.map((foodbank) => {
          return (
            foodbank && (
              <Marker
                key={`${foodbank.location.coordinates[1]}-${foodbank.location.coordinates[0]}`}
                position={{
                  lat: foodbank.location.coordinates[1],
                  lng: foodbank.location.coordinates[0],
                }}
                onClick={() => (window.location.href = foodbank.link)}
                icon={{
                  // @ts-ignore
                  scaledSize: { width: 28, height: 48 },
                  url: "https://res.cloudinary.com/dbviyopbo/image/upload/v1634687412/Assets/marker_tnk28o.png",
                }}
              ></Marker>
            )
          );
        })}
      </GoogleMap>
    </div>
  );
}

export default Map;
