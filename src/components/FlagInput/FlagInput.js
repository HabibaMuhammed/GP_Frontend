import React, { useState } from "react";
import axios from "axios";

import "./FlagInput.css";
import Toast from "../Toast/Toast";
export default function FlagInput() {
  const [text, setText] = useState("");
  const [solved, setSolved] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [buttonText, setButtonText] = useState("Submit");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    const token = JSON.parse(localStorage.getItem("token"));
    
    e.preventDefault();
    const reqURL = "http://localhost:5001/api/labs/evaluate";

    const data = {
      flag: text,
      labid: "642e11ce831f18ea28471154",
    };
    setShowToast(true);
    axios
      .post(reqURL, data, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        if (response.data.message === "Success") {
         
          var today = new Date();
          var submittime=today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    
          localStorage.setItem("submitTime", submittime);
          setSolved(true);
        } else {
          setSolved(false);
        }
      })
      .catch((error) => {
        setButtonText("Try Again");
      });
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="inputContainer">
      <input
        type="text"
        value={text}
        placeholder="Enter The Flag:"
        onChange={handleChange}
        className="inputField"
      />
      <button className="inputBtn" onClick={handleSubmit}>
        {buttonText}
      </button>
      {solved && showToast && <Toast success={solved} />}
      {!solved && showToast && <Toast success={solved} />}
    </div>
  );
}