import React, { useState } from "react";
import "./ForgetPassword.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import { Slide, ToastContainer, toast } from "react-toastify";
export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const reqURL = "http://localhost:5001/api/user/sendcode";
    const data = {
      email: email,
    };
    if (!email) {
      toast.error("Please fill the email", { transition: Slide });
      return;
    }
    axios
      .patch(reqURL, data)
      .then((response) => {
        if (response.data.message === "Done check ur email") {
          toast.success("Check your email !", { transition: Slide });
          setTimeout(() => {
            navigate("/otp");
          }, 5000); // Delay for 10 seconds (10000 milliseconds)
        } else {
          toast.error("Not register account", { transition: Slide });
        }
      })
      .catch((error) => {
        toast.error("Not registered account", { transition: Slide });
      });
    setTimeout(() => {}, 3000);
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
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
