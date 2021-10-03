import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function IsLoggedIn() {
  let history = useHistory();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) history.push("/login");
  }, [history]);
}

export default IsLoggedIn;
