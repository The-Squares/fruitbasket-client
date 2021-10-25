import React, { useRef } from "react";
import "./CreateOffer.css";
import TopBar from "Components/TopBar";
import submitForm from "Util/submitForm";

function CreateOffer({ history }) {
  const imageRef = useRef(null);

  return (
    <div className="CreateOffer">
      <TopBar page="Create Offer" />
      <div className="offerForm">
        <form onSubmit={(e) => submitForm(e, history, imageRef)}>
          <label>
            Fruit Type<span>*</span>
          </label>
          <input data-key="fruit_type" type="text" />

          <label>
            Price<span>*</span>
          </label>
          <input data-key="price" type="tel" />

          <label>
            Organic<span>*</span>
          </label>
          <div className="organic">
            <input data-key="organic" type="checkbox" />
          </div>

          <label>
            Fruit Picture<span>*</span>
          </label>
          <div className="fruitPic">
            <input
              ref={imageRef}
              type="file"
              accept="image/jpeg, image/jpg, image/png, image/heic"
            />
          </div>

          <label>
            Number remaining<span>*</span>
          </label>
          <input data-key="remaining" type="tel" />

          <label>
            Description<span>*</span>
          </label>
          <textarea data-key="description" />

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
