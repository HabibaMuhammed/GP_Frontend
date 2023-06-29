import React from "react";
import "./lab.css";
import learn from "../../assets/learn.png";
import { useNavigate } from "react-router-dom";
const Labs = ({ img, title }) => {
  const navigate = useNavigate();
  
  const navigateToContent = (title) => {
    const currentTime = new Date().toLocaleTimeString();
    localStorage.setItem("labtime",currentTime);
    navigate(`/content/${(title.title)}`);

  };
  const navigateTolearningContent = () => {
    navigate("/learningcontent"); 
  };
 if(img === learn){
  return (
    <div className="labCard">
      <img src={img} className="labCard__img" alt=""/>
      <div className="labCard__body">
        <h3 className="labCard__title">{title}</h3>
        <button className="labCard__btn" onClick={navigateTolearningContent}>
        Let's Begin
        </button>
      </div>
    </div>
  );
} else{
  return(
  <div className="labCard">
  <img src={img} className="labCard__img" alt=""/>
  <div className="labCard__body">
    <h3 className="labCard__title">{title}</h3>
    <button className="labCard__btn" onClick={()=>navigateToContent({title})}>
    Access Lab
    </button>
  </div>
</div>
);

  }
};
export default Labs;