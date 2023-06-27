import React, { useState } from "react";
import "./ForgetPassword.css";
export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const handleClick = () => {
    // Perform additional logic here
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="ForgetPasswordContainer">
      <div className="ForgetPasswordInputContainer">
        <h2 className="ForgetPasswordTitle">Forgot My Password:</h2>
        <div className="PersonalDisplay">
          <input
            className="ForgetPasswordInput"
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <button onClick={handleClick} className="ForgetPasswordBtn">
           Send
          </button>
        </div>
      </div>
    </div>
  );
}
