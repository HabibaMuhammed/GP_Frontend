import React, { useState } from "react";
import "./UpdatePassword.css";
export default function UpdatePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleClick = () => {
    // Perform additional logic here
  };
  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  return (
    <div className="UpdatePasswordContainer">
      <div className="UpdatePasswordInputContainer">
        <h2 className="UpdatePasswordTitle">Manage Your Account:</h2>
        <div className="PersonalDisplay">
          <input
            className="UpdatePasswordInput"
            type="text"
            placeholder="Old Password"
            value={oldPassword}
            onChange={handleOldPasswordChange}
          />
          <input
            className="UpdatePasswordInput"
            type="text"
            placeholder="New Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <input
            className="UpdatePasswordInput"
            type="text"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
          />
          <button onClick={handleClick} className="UpdatePasswordBtn">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}
