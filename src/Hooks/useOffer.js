import { useEffect, useState } from "react";
import { useParams } from "react-router";

function useOffer() {
  let [offer, setOffer] = useState({});
  // @ts-ignore
  let { offerid } = useParams();

  useEffect(() => {
    const getOffer = async () => {
      try {
        let response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/offers/${offerid}/all`
        );
        if (response.status !== 200) return;

        let data = await response.json();
        setOffer(data);
      } catch (e) {}
    };

    getOffer();
  }, [offerid]);

  return offer;
}

export default useOffer;
