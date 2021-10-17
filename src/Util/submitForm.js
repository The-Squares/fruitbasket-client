const submitForm = async (e, history, imageRef) => {
  e.preventDefault();
  let answers = Array.from(e.target)
    .filter((target) => target.dataset.key)
    .map((target) => [target.dataset.key, target]);

  let data = {};
  answers.forEach(([key, value]) => {
    if (key === "organic") return (data[key] = value.checked);
    data[key] = value.value;
  });

  data.timestamp = Date.now();
  data.user = JSON.parse(localStorage.getItem("user"))?._id;

  let response = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/api/offers`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  let offer = await response.json();

  const formData = new FormData();
  formData.append("image", imageRef.current.files[0]);

  await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/api/offers/${offer["_id"]}/image`,
    {
      method: "POST",
      body: formData,
    }
  );

  history.push("/");
};

export default submitForm;
