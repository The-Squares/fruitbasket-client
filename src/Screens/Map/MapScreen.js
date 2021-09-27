import React from "react";
import useGeolocation from "Hooks/useGeolocation";
import "./MapScreen.css";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import useGeoOffers from "Hooks/useGeoOffers";
import TopBar from "Components/TopBar";

const libraries = [];

function Map() {
  let [lat, long] = useGeolocation();
  let offers = useGeoOffers(lat, long);
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
      <TopBar page="Offers" />
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
              ></Marker>
            )
          );
        })}
      </GoogleMap>
    </div>
  );
}

export default Map;
