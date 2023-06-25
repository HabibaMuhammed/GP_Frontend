import React, { useState } from "react";
import "./ChangePassword.css";
export default function ChangePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleClick = () => {
    // Perform additional logic here
  };
  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };
  const handleConfirmNewPassword = (event) => {
    setConfirmNewPassword(event.target.value);
  };

  return (
    <div className="ChangePasswordContainer">
      <div className="ChangePasswordInputContainer">
        <h2 className="ChangePasswordTitle">Reset Password:</h2>
        <div className="PersonalDisplay">
          <input
            className="ChangePasswordInput"
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
           <input
            className="ChangePasswordInput"
            type="password"
            placeholder="Confirm New Password"
            value={confirmNewPassword}
            onChange={handleConfirmNewPassword}
          />
          <button onClick={handleClick} className="ChangePasswordBtn">
           Update
          </button>
        </div>
      </div>
    </div>
  );
}
