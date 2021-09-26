import { useEffect, useState } from "react";

function useGeoOffers(lat, long, distance = 2000) {
  let [offers, setOffers] = useState([]);

  useEffect(() => {
    const getOffers = async () => {
      if (!lat || !long) return;
      let response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/offers/location?lat=${lat}&long=${long}&distance=${distance}`
      );
      if (response.status !== 200) return;
      let data = await response.json();
      setOffers(data);
    };

    getOffers();
  }, [distance, lat, long]);

  return offers;
}

export default useGeoOffers;
