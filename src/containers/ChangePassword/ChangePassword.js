import React, { useState } from "react";
import "./ChangePassword.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import { Slide, ToastContainer, toast } from "react-toastify";

export default function ChangePassword() {
  const [email, setEmail] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const reqURL = "http://localhost:5001/api/user/forgetPassword";
    const data = {
      email: email,
      password: newPassword
    };
    console.log(data);

    if (!email || !newPassword ){
      toast.error("Missing Fields",{transition:Slide})
      return;
    }

    axios
      .patch(reqURL, data)
      .then((response) => {
        if (response.data.message === "Password updated") {
          toast.success("Updated Successfully !",{transition:Slide})
          setTimeout(() => {
            navigate("/login");
          }, 10000); 
        }
        else {
          toast.error("In-valid account",{transition:Slide})
        }
      })
      .catch((error) => {
      });
    setTimeout(() => {
    }, 3000);
  };
  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="ChangePasswordContainer">
      <div className="ChangePasswordInputContainer">
        <h2 className="ChangePasswordTitle">Reset Password:</h2>
        <div className="PersonalDisplay">
        <input
            className="ChangePasswordInput"
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            className="ChangePasswordInput"
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
          <button onClick={handleSubmit} className="ChangePasswordBtn">
           Update
          </button>
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
}
