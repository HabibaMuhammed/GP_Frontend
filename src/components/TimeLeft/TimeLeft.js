import React from "react";
import time from "../../assets/Icon.png";
import "./TimeLeft.css";
//let uploadedtime=localStorage.getItem("submitTime");
//let downloadtime=localStorage.getItem("downloadTime");
//let timeelapsed=uploadedtime-downloadtime;
export default function TimeLeft() {
  return (
    <div className="timeContainer">
      <img src={time} alt="time" className="timeImage" />
      <div className="timeInfo">
        <h2 className="timeTitle">Learning Time</h2>
        <h1 className="timeTitle time">2h</h1>
      </div>
    </div>
  );
}
