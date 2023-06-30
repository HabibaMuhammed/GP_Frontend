import React, { useState, useEffect } from 'react';
import time from '../../assets/Icon.png';
import './TimeLeft.css';

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

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes % 60).padStart(2, '0');
  const formattedSeconds = String(seconds % 60).padStart(2, '0');

  return (
    <div className="timeContainer">
      <img src={time} alt="time" className="timeImage" />
      <div className="timeInfo">
        <h2 className="timeTitle">Learning Time</h2>
        <h1 className="timeTitle time">
          {formattedHours}:{formattedMinutes}:{formattedSeconds}
        </h1>
      </div>
    </div>
  );
}
