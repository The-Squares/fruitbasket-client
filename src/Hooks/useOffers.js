import { useEffect, useState } from "react";

function useOffers(override) {
  let [offers, setOffers] = useState([]);

  useEffect(() => {
    const getOffers = async () => {
      try {
        let response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/offers`
        );
        if (response.status !== 200) return;

        let data = await response.json();
        setOffers(data);
      } catch (e) {}
    };

    getOffers();
  }, []);

  useEffect(() => {
    if (override.length === 0) return;
    setOffers(override);
  }, [override]);

  return offers;
}

export default useOffers;
