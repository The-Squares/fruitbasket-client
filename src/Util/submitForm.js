const submitForm = async (e, history) => {
  e.preventDefault();
  let answers = Array.from(e.target)
    .map((target) => [target.dataset.key, target])
    .slice(0, -1);

  let data = {};
  answers.forEach(([key, value]) => {
    console.log(key, value);
    if (key === "organic") return (data[key] = value.checked);
    data[key] = value.value;
  });

  data.timestamp = Date.now();
  data.user = JSON.parse(localStorage.getItem("user"))?._id;

  await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/offers`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  history.push("/");
};

export default submitForm;
