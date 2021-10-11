const signUp = async (e, imageRef, history) => {
  e.preventDefault();
  let answers = Array.from(e.target)
    .slice(0, 4)
    .map((target) => [target.dataset.key, target.value]);

  let userData = {};
  answers.forEach(([key, value]) => {
    userData[key] = value;
  });

  let checkbox = e.target.querySelector(".volunterInput input");
  userData["volunteer"] = checkbox.checked;

  let response = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/api/users`,
    {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  let user = await response.json();

  const formData = new FormData();
  formData.append("image", imageRef.current.files[0]);

  await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/api/users/${user["_id"]}/image`,
    {
      method: "POST",
      body: formData,
    }
  );

  localStorage.setItem("user", JSON.stringify(user));
  history.push("/");
};

export default signUp;
