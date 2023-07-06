import React, { useState } from "react";
import "./UpdatePassword.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

import { Slide, ToastContainer,toast } from "react-toastify";
export default function UpdatePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    const token = JSON.parse(localStorage.getItem("token"));
    e.preventDefault();
    const reqURL = "http://localhost:5001/api/user/updatePassword";
    const data = {
      oldpass: oldPassword,
      newpass: password,
      confirm:confirmPassword
    };
    console.log(data);

    if (!oldPassword || !password || !confirmPassword){
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
        if (response.data.message === "Password updated successfully") {
          toast.success("Updated Successfully !",{transition:Slide})
        }
        else  if (response.data.message === "invalid old password"){
          toast.error("Invalid old password",{transition:Slide})
        }
        else  if (response.data.message === "don't match new with confirm"){
          toast.error("Passwords don't match",{transition:Slide})
        }
        else if (response.data.message === "don't match new with confirm"){ 
          toast.error("Passwords is too short",{transition:Slide})
        }
      })
      .catch((error) => {
      });
    setTimeout(() => {
    }, 3000);
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
            type="password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={handleOldPasswordChange}
          />
          <input
            className="UpdatePasswordInput"
            type="password"
            placeholder="New Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <input
            className="UpdatePasswordInput"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
          />
          <button onClick={handleSubmit} className="UpdatePasswordBtn">
            Update Password
          </button>
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
}
