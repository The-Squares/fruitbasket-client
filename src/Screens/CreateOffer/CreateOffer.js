import React from "react";
import "./CreateOffer.css";
import TopBar from "Components/TopBar";

function CreateOffer({ history }) {
  const submitForm = async (e) => {
    e.preventDefault();
    let answers = Array.from(e.target)
      .map((target) => [target.dataset.key, target.value])
      .slice(0, -1);

    let data = {};
    answers.forEach(([key, value]) => {
      console.log(key, value);
      data[key] = value;
    });

    data.timestamp = Date.now();
    data.user = JSON.parse(localStorage.getItem("user"))?._id;

    await fetch(`${process.env.REACT_APP_API_BASE_URL}/offers`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    history.push("/");
  };

  return (
    <div className="CreateOffer">
      <TopBar page="Create Offer" />
      <div className="offerForm">
        <form onSubmit={submitForm}>
          <input data-key="address" type="text" placeholder="Address...?" />
          <input data-key="price" type="text" placeholder="Price...?" />
          <input
            data-key="fruit_type"
            type="text"
            placeholder="Fruit Type...?"
          />
          <input
            data-key="paypal_address"
            type="text"
            placeholder="Paypal email...?"
          />
          <input data-key="organic" type="text" placeholder="Organic...?" />
          <input
            data-key="remaining"
            type="text"
            placeholder="Number remaining...?"
          />
          <input
            data-key="description"
            type="text"
            placeholder="Description...?"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateOffer;
