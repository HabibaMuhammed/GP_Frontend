import React, { useState, ChangeEvent, useRef } from "react";
import "./ChallengeContent.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import upload2 from "../../assets/Uploading.png";
import { Slide, ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ChallengeContent() {
  const [Header1, setHeader1] = useState("");
  const [Content1, setContent1] = useState("");
  const [Header2, setHeader2] = useState("");
  const [Content2, setContent2] = useState("");
  const [Header3, setHeader3] = useState("");
  const [Content3, setContent3] = useState("");
  const [Header4, setHeader4] = useState("");
  const [Content4, setContent4] = useState("");
  const [Header5, setHeader5] = useState("");
  const [Content5, setContent5] = useState("");
  const [Icon, setIcon] = useState([""]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // const navigateAdminPage = () => {
  //   navigate("/Admin");
  // };

  const handleDrop = (event) => {
    event.preventDefault();
    const { Icon } = event.dataTransfer;

    setIcon(Icon);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e) => {
    setIcon(e.target.files[0]);
  };

  const handleHeader1Change = (event) => {
    setHeader1(event.target.value);
  };
  const handleHeader2Change = (event) => {
    setHeader2(event.target.value);
  };
  const handleHeader3Change = (event) => {
    setHeader3(event.target.value);
  };
  const handleHeader4Change = (event) => {
    setHeader4(event.target.value);
  };
  const handleHeader5Change = (event) => {
    setHeader5(event.target.value);
  };

  const handleContent1Change = (event) => {
    setContent1(event.target.value);
  };
  const handleContent2Change = (event) => {
    setContent2(event.target.value);
  };
  const handleContent3Change = (event) => {
    setContent3(event.target.value);
  };
  const handleContent4Change = (event) => {
    setContent4(event.target.value);
  };
  const handleContent5Change = (event) => {
    setContent5(event.target.value);
  };

  const handleClick = (e) => {
    //const token = JSON.parse(localStorage.getItem("token"));
    e.preventDefault();
    const reqURL = "http://localhost:5001/api/admin/labcontent";
    

    if (
      // !Header1 ||
      // !Header2 ||
      // !Header3 ||
      // !Header4 ||
      // !Header5 ||
      // !Content1 ||
      // !Content2 ||
      // !Content3 ||
      // !Content4 ||
      // !Content5 ||
      !Icon
    ) {
      toast.error("Missing Fields", { transition: Slide });
      return;
    }
    const ChallengeName =localStorage.getItem("name");
    const headers = `${Header1}, ${Header2}, ${Header3}, ${Header4}, ${Header5}`;
    const content = `${Content1}, ${Content2}, ${Content3}, ${Content4}, ${Content5}`;
    const formData = new FormData();
    formData.append("name", ChallengeName);
    formData.append("file",Icon);
    formData.append("headers", headers);
    formData.append("headers_content", content);

    axios.post(reqURL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        if (response.data.message === "Lab content is Added Successfuly") {
          toast.success("New Challenge Content is Added Successfully !", {
            transition: Slide,
          });
        } else {
          toast.error("Something went Wrong, Please Try again", {
            transition: Slide,
          });
        }
      })
      .catch((error) => {});
    setTimeout(() => {}, 1500);
  };
  return (
    <div className="ChallengeContentContainer">
      <div className="ChallengeContentInputContainer">
        <h2 className="ChallengeContentTitle">Add Challenge Content:</h2>
        <div className="ChallengeDisplay">
          <input
            className="ChallengeContentHeader"
            type="text"
            placeholder="Header 1:"
            value={Header1}
            onChange={handleHeader1Change}
          />
          <input
            className="ChallengeContent"
            type="text"
            placeholder="Content 1 ...."
            value={Content1}
            onChange={handleContent1Change}
          />
          <input
            className="ChallengeContentHeader"
            type="text"
            placeholder="Header 2:"
            value={Header2}
            onChange={handleHeader2Change}
          />
          <input
            className="ChallengeContent"
            type="text"
            placeholder="Content 2 ...."
            value={Content2}
            onChange={handleContent2Change}
          />
          <input
            className="ChallengeContentHeader"
            type="text"
            placeholder="Header 3:"
            value={Header3}
            onChange={handleHeader3Change}
          />
          <input
            className="ChallengeContent"
            type="text"
            placeholder="Content 3 ...."
            value={Content3}
            onChange={handleContent3Change}
          />
          <input
            className="ChallengeContentHeader"
            type="text"
            placeholder="Header 4:"
            value={Header4}
            onChange={handleHeader4Change}
          />
          <input
            className="ChallengeContent"
            type="text"
            placeholder="Content 4 ...."
            value={Content4}
            onChange={handleContent4Change}
          />
          <input
            className="ChallengeContentHeader"
            type="text"
            placeholder="Header 5:"
            value={Header5}
            onChange={handleHeader5Change}
          />
          <input
            className="ChallengeContent"
            type="text"
            placeholder="Content 5 ...."
            value={Content5}
            onChange={handleContent5Change}
          />

          <img
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            src={upload2}
            className="ChallengecontentImg"
            alt=" "
          />
          <button
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleUploadClick}
            className="BrowsecontentBtn"
          >
            {Icon ? "Browse Files" : "Browse Files"}
          </button>
          <input
            type="file"
            ref={inputRef}
            accept=".zip,.rar,.pka,.pkz"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          <button onClick={handleClick} className="ChallengeContentBtn">
            Finish Challenge
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
