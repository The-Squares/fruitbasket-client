import React from "react";
import "./CreateOffer.css";
import TopBar from "Components/TopBar";
import submitForm from "Util/submitForm";

function CreateOffer({ history }) {
  return (
    <div className="CreateOffer">
      <TopBar page="Create Offer" />
      <div className="offerForm">
        <form onSubmit={(e) => submitForm(e, history)}>
          <label>
            Fruit Type<span>*</span>
          </label>
          <input data-key="fruit_type" type="text" />

          <label>
            Price<span>*</span>
          </label>
          <input data-key="price" type="text" />

          <label>
            Organic<span>*</span>
          </label>
          <input data-key="organic" type="checkbox" />

          <label>
            Number remaining<span>*</span>
          </label>
          <input data-key="remaining" type="text" />

          <label>
            Description<span>*</span>
          </label>
          <input data-key="description" type="text" />

          <hr />

          <label>Paypal Address Email</label>
          <input data-key="paypal_address" type="text" />

          <label>
            Address<span>*</span>
          </label>
          <input data-key="address" type="text" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateOffer;
