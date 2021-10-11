const login = async (e, history) => {
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

export default login;
