import React, { useState } from "react";
import "./PersonalInfo.css";
export default function PersonalInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [location, setLocation] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handleClick = () => {
    // Perform additional logic here
  };
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
            placeholder="Phone"
            value={phone}
            onChange={handlePhoneChange}
          />
          <input
            className="PersonalInfoInput"
            type="text"
            placeholder="Date of Birth"
            value={birthdate}
            onChange={handleBirthdateChange}
          />
          <button onClick={handleClick} className="PersonalInfoBtn">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
