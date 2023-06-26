import React, { useState } from "react";
import axios from "axios";
import "./FlagInput.css";
import Toast from "../Toast/Toast";
export default function FlagInput() {
  const [text, setText] = useState("");
  const [solved, setSolved] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [buttonText, setButtonText] = useState("Submit");

  const errors={
    noFlagInput: "Please enter a flag"
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    const token = JSON.parse(localStorage.getItem("token"));
    e.preventDefault();
    console.log(token);
    const reqURL = "http://localhost:5001/api/labs/evaluate";

    const data = { 
      flag: text,
      labid: "64934e9cc233d0378579585c",
    };

    if (!text){
      setErrorMessages({ name: "noFlagInput", message: errors.noFlagInput });
      return;
    } 

    setShowToast(true);
    axios
      .post(reqURL, data, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        if (response.data.message === "Success") {
          setSolved(true);
        }
        else{
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

  const renderErrorMsg = (name) =>
  name === errorMessages.name && (
    <p className="error_msg">{errorMessages.message}</p>
  );
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
      {renderErrorMsg("text")}
     {renderErrorMsg("noFlagInput")}
    </div>
  );
}