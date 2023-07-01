import React, { useState, ChangeEvent, useRef } from "react";
import "./ChallengeInfo.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import upload from "../../assets/Upload.png";

import { Slide, ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ChallengeInfo() {
  const [ChallengeName, setChallengeName] = useState("");
  const [Flag, setFlag] = useState("");
  const [Icon, setIcon] = useState([""]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const navigateChallengeContent = () => {
    navigate("/ChallengeContent");
  };

   const handleDrop = (event) => {
    event.preventDefault();
    const { Icon } = event.dataTransfer;
  
      setIcon(Icon);
   }
   

  const handleDragOver = (event) => {
    event.preventDefault();
  };

 
  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e) => {
    setIcon(e.target.files[0]);
  };

  const handleChallengeNameChange = (event) => {
    setChallengeName(event.target.value);
  };
  const handleFlagChange = (event) => {
    setFlag(event.target.value);
  };

  const handleClick = (e) => {
    //const token = JSON.parse(localStorage.getItem("token"));
    e.preventDefault();
    const reqURL = "http://localhost:5001/api/admin/labname";
    

    if (!ChallengeName || !Flag || !Icon) {
      toast.error("Missing Fields", { transition: Slide });
      return;
    };
    localStorage.setItem("name",ChallengeName);
    const formData = new FormData();
    formData.append("name", ChallengeName);
    formData.append("icon", Icon);
    formData.append("Flag", Flag);
   
    axios.post(reqURL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        if (response.data.message === "Lab is Added Successfuly") {
          toast.success("New Challenge is Added Successfully !", {
            transition: Slide,
          },
          navigateChallengeContent());
         }
        else {
          toast.error("Something went Wrong, Please Try again", {
            transition: Slide,
          });
        }
      })
      .catch((error) => {});
    setTimeout(() => {},1500 );
  };
  return (
    <div className="ChallengeInfoContainer">
      <div className="ChallengeInfoInputContainer">
        <h2 className="ChallengeInfoTitle">Add New Challenge:</h2>
        <div className="ChallengeDisplay">
          <input
            className="ChallengeInfoInput"
            type="text"
            placeholder="Name:"
            value={ChallengeName}
            onChange={handleChallengeNameChange}
          />
          <input
            className="ChallengeInfoInput"
            type="text"
            placeholder="Flag:"
            value={Flag}
            onChange={handleFlagChange}
          />

          <img
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            src={upload}
            className="ChallengeImg"
            alt=" "
          />
          <button
          
            onClick={handleUploadClick}
            className="BrowseBtn"
          >
            {Icon ? "Browse Files" : "Browse Files"}
          </button>
          <input
            type="file"
            ref={inputRef}
            accept="image/jpeg , image/png"
            onChange={handleFileChange}
           style={{ display: "none" }}
          />
          
          <button onClick={handleClick} className="ChallengeInfoBtn">
            Save & Continue
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
