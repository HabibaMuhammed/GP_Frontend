import React from "react";

import { Invite, Performance, TimeLeft } from "../../components";
import "./LabStats.css";
export default function LabStats() {
  return (
    <div className="labStatsContainer">
      <Performance />
      <TimeLeft />
      <Invite />
    </div>
  );
}
