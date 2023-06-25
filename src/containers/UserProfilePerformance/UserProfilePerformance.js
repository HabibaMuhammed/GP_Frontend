import React from "react";
import "./UserProfilePerformance.css";
import Heatmap from "../../components/UserProfileHeatmap/UserProfileHeatmap";
export default function UserProfilePerformance() {
  return (
    <div className="UserProfilePerformanceContainer">
      <div className="UserProfilePerformanceSub">
        <h2 className="PerformanceTitle">Performance:</h2>
        <Heatmap/>
      </div>
    </div>
  );
}
