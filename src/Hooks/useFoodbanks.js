import { useEffect, useState } from "react";

function useFoodbanks() {
  let [foodbanks, setFoodbanks] = useState([]);

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (!JSON.parse(user).volunteer) return;

    const getFoodbanks = async () => {
      try {
        let response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/foodbanks`
        );
        if (response.status !== 200) return;

        let data = await response.json();
        setFoodbanks(data);
      } catch (e) {}
    };

    getFoodbanks();
  }, []);

  return foodbanks;
}

export default useFoodbanks;
