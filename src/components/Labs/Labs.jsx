import React from "react";
import "./lab.css";
import { useNavigate } from "react-router-dom";
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
