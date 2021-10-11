import ImageCrop from "Components/ImageCrop";
import React, { useRef, useState } from "react";
import signUp from "Util/signUp";
import "./Signup.css";

function Signup({ history }) {
  const [dimensions, setDimensions] = useState({});
  const [cropImage, enableCrop] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const imageRef = useRef(null);

  const handleUpload = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onload = () => {
      // @ts-ignore
      setImageURL(reader.result);
      enableCrop(true);
    };

    reader.readAsDataURL(file);
  };

  const updateDimensions = (newDimensions) => {
    setDimensions(newDimensions);
    console.log(dimensions);
    enableCrop(false);
  };

  return (
    <div className="Signup">
      <p className="signupHead">Signup</p>
      <form onSubmit={(e) => signUp(e, imageRef, history)}>
        <input type="email" data-key="email" placeholder="Email..." />
        <input type="password" data-key="password" placeholder="Password..." />
        <input type="text" data-key="username" placeholder="Username..." />
        <input
          type="text"
          data-key="display_name"
          placeholder="Display name..."
        />

        <div className="fileInput">
          <p>Profile Picture</p>
          <input
            type="file"
            onChange={handleUpload}
            ref={imageRef}
            accept="image/jpeg, image/jpg, image/png"
          />
        </div>
        <div className="volunterInput">
          <p>Volunteer?</p>
          <input type="checkbox" />
        </div>
        <button type="submit">Sign Up</button>
        {cropImage ? (
          <ImageCrop
            image={imageURL}
            updateDimensions={updateDimensions}
          ></ImageCrop>
        ) : (
          <></>
        )}
      </form>
      <p className="signupLink" onClick={() => history.push("/login")}>
        Login
      </p>
    </div>
  );
}

export default Signup;
