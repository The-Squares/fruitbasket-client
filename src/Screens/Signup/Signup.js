import ImageCrop from "Components/ImageCrop";
import React, { useRef, useState } from "react";
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

  const signUp = async (e) => {
    e.preventDefault();
    console.log("submitted");
    let answers = Array.from(e.target)
      .slice(0, 4)
      .map((target) => [target.dataset.key, target.value]);
    console.log(answers);
    let userData = {};
    answers.forEach(([key, value]) => {
      userData[key] = value;
    });
    console.log(JSON.stringify(userData));

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
    console.log(user);

    const formData = new FormData();
    console.log(imageRef.current.files[0]);
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

  return (
    <div className="Signup">
      <form onSubmit={signUp}>
        <section>
          <input type="email" data-key="email" placeholder="email..." />
          <input
            type="password"
            data-key="password"
            placeholder="password..."
          />
        </section>
        <section>
          <input type="text" data-key="username" placeholder="username..." />
          <input
            type="text"
            data-key="display_name"
            placeholder="display name..."
          />
        </section>

        <input type="file" onChange={handleUpload} ref={imageRef} />
        <button type="submit">Submit</button>
        {cropImage ? (
          <ImageCrop
            image={imageURL}
            updateDimensions={updateDimensions}
          ></ImageCrop>
        ) : (
          <></>
        )}
      </form>
      <a href="/login">Login</a>
    </div>
  );
}

export default Signup;
