import { useEffect, useState } from "react";

function useOffers() {
  let [offers, setOffers] = useState([]);

  useEffect(() => {
    const getOffers = async () => {
      let response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/offers`
      );
      if (response.status !== 200) return;

      let data = await response.json();
      setOffers(data);
    };

    getOffers();
  }, []);

  return offers;
}

export default useOffers;
