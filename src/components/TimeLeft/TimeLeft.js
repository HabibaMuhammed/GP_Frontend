import React from "react";
import { useState, useEffect } from 'react';
import time from "../../assets/Icon.png";
import "./TimeLeft.css";
export default function TimeLeft() {
 
 
    const [startTime] = useState(new Date().getTime());
    const [elapsedTime, setElapsedTime] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        const currentTime = new Date().getTime();
        const elapsed = currentTime - startTime;
        setElapsedTime(elapsed);
      }, 1000); 
  
      return () => {
        clearInterval(interval);
      };
    }, [startTime]);
  
   
  
    // Convert elapsed time in milliseconds to seconds
    const seconds = Math.floor(elapsedTime / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  
 
  

  return (
    <div className="timeContainer">
      <img src={time} alt="time" className="timeImage" />
      <div className="timeInfo">
        <h2 className="timeTitle">Learning Time</h2>
        <h1 className="timeTitle time">0{hours}:0{minutes}:{remainingSeconds}</h1>
      </div>
    </div>
  );
}
