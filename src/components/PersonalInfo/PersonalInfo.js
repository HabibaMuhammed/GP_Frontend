import React, { useState } from "react";
import "./PersonalInfo.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

import { Slide, ToastContainer,toast } from "react-toastify";

export default function PersonalInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [location, setLocation] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handleClick = (e) => {
    const token = JSON.parse(localStorage.getItem("token"));
    e.preventDefault();
    const reqURL = "http://localhost:5001/api/user/update";
    const data = {
      name: name,
      email: email,
      Location:location,
      Birthday:birthdate
    };
    console.log(data);

    if (!name || !email || !location || !birthdate){
      toast.error("Missing Fields",{transition:Slide})
      return;
    }

    axios
      .patch(reqURL, data, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        if (response.data.message === "User Updated") {
          toast.success("Updated Successfully !",{transition:Slide})
        }
        else  if (response.data.message === "User not found"){
          toast.error("User not found",{transition:Slide})
        }
      })
      .catch((error) => {
      });
    setTimeout(() => {
    }, 3000);  };
  return (
    <div className="PersonalInfoContainer">
      <div className="PersonalInfoInputContainer">
        <h2 className="PersonalInfoTitle">Personal Information:</h2>
        <div className="PersonalDisplay">
          <input
            className="PersonalInfoInput"
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
          <input
            className="PersonalInfoInput"
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            className="PersonalInfoInput"
            type="text"
            placeholder="Date of Birth"
            value={birthdate}
            onChange={handleBirthdateChange}
          />
          <input
            className="PersonalInfoInput"
            type="text"
            placeholder="Location"
            value={location}
            onChange={handleLocationChange}
          />
          <button onClick={handleClick} className="PersonalInfoBtn">
            Update
          </button>
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
}
