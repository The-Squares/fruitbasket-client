import React from "react";
import "./Login.css";

function Login({ history }) {
  const login = async (e) => {
    e.preventDefault();
    let answers = Array.from(e.target)
      .slice(0, 2)
      .map((target) => [target.dataset.key, target.value]);

    let userData = {};
    answers.forEach(([key, value]) => {
      userData[key] = value;
    });

    let response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/api/login`,
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status !== 200) return;

    let user = await response.json();
    localStorage.setItem("user", JSON.stringify(user));
    history.push("/");
  };

  return (
    <div className="Login">
      <form onSubmit={login}>
        <input type="email" data-key="email" placeholder="email..." />
        <input type="password" data-key="password" placeholder="password..." />
        <button type="submit">Log in</button>
      </form>
      <a href="/signup">Signup</a>
    </div>
  );
}

export default Login;
