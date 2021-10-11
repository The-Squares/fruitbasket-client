import React from "react";
import login from "Util/login";
import Icon from "Media/icon_transparent.png";
import "./Login.css";

function Login({ history }) {
  return (
    <div className="Login">
      <div className="loginHead">
        <p>Welcome to</p>
        <img src={Icon} alt="" />
        <p className="loginTitle">Fruit Basket</p>
      </div>
      <form onSubmit={(e) => login(e, history)}>
        <input type="email" data-key="email" placeholder="Email..." />
        <input type="password" data-key="password" placeholder="Password..." />
        <button type="submit">Log in</button>
      </form>
      <p className="loginLink" onClick={() => history.push("/signup")}>
        Signup
      </p>
    </div>
  );
}

export default Login;
