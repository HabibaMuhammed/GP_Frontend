import React, { useState } from "react";
import "./OTP.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import { Slide, ToastContainer, toast } from "react-toastify";
export default function OTP() {
  const [email, setEmail] = useState("");
  const [OTP, setOTP] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const reqURL = "http://localhost:5001/api/user/Verified";
    const data = {
      email: email,
      code:OTP
    };
    console.log(data);

    if (!email || !OTP) {
      toast.error("Please fill all fields", { transition: Slide });
      return;
    }

    axios
      .post(reqURL, data)
      .then((response) => {
        if (response.data.message === "Verified") {
          toast.success("Confirmed !", { transition: Slide });
          navigate("/reset");

        } else  {
          toast.error("Wrong OTP", { transition: Slide });
        }
      })
      .catch((error) => {
        toast.error("Wrong OTP", { transition: Slide });

      });
    setTimeout(() => {}, 3000);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleOTPChange = (event) => {
    setOTP(event.target.value);
  };

  return (
    <div className="OTPContainer">
      <div className="OTPInputContainer">
        <h2 className="OTPTitle">Confirm OTP</h2>
        <div className="PersonalDisplay">
          <input
            className="OTPInput"
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
             <input
            className="OTPInput"
            type="text"
            placeholder="OTP"
            value={OTP}
            onChange={handleOTPChange}
          />
          <button onClick={handleClick} className="OTPBtn">
            Send
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
