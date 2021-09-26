import { useEffect, useState } from "react";

function useGeolocation() {
  let [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    let setPosition = async () => {
      let position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve);
      });
      setCoordinates([position.coords.latitude, position.coords.longitude]);
    };
    setPosition();
  }, []);

  return coordinates;
}

export default useGeolocation;
