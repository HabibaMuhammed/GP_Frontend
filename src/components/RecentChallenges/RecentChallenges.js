import React from "react";
import "./RecentChallenges.css";
import RecentCard from "../RecentCard/RecentCard";
export default function RecentChallenges() {
  return (
    <div className="RecentChallengesContainer">
      <div className="RecentChallengesSubContainer">
        <h2 className="RecentChallengesTitle">Recent Challenges:</h2>
        <div className="RecentChallengesBody">
            <RecentCard/>
            <RecentCard/>
        </div>
      </div>
    </div>
  );
}
