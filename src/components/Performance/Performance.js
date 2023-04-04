import React from "react";
import "./Performance.css";

export default function Performance() {
  return (
    <div className="PerformanceContainer">
      <h2 className="per">Performance</h2>
      <h3 className="sub">Total labs</h3>
      <h1 className="number">6</h1>
      <h3 className="sub">Keep it up!</h3>
      <div>
        <div className="mask">
          <div className="semi-circle"></div>
          <div className="semi-circle--mask"></div>
          <div className="bar">
            <div className="bar-bar-bar"></div>
          </div>
          <div className="percentage">0%</div>
        </div>
      </div>
    </div>
  );
}
