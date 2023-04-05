import React from "react";
import "./lab.css";
import { useNavigate } from "react-router-dom";

import bruteforce from "../../assets/bruteforce.png";
import xss from "../../assets/xss.png";
import csrf from "../../assets/csrf.png";
import sql from "../../assets/sqlinjection.png";
import weakid from "../../assets/id.png";
import file from "../../assets/fileupload.png";
const Labs = ({ img, title }) => {
  const navigate = useNavigate();
  const navigateToContent = () => {
    navigate("/content"); // Redirect to the "/content" page
  };

  return (
    <div className="labCard">
      <img src={img} className="labCard__img" />
      <div className="labCard__body">
        <h3 className="labCard__title">{title}</h3>
        <button className="labCard__btn" onClick={navigateToContent}>
          Access Lab
        </button>
      </div>
    </div>
  );
};
export default Labs;
