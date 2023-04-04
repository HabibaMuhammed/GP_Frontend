import React from "react";
import "./LabExplanation.css";
import { LabAccordion, VerticalLine } from "../../components";
import LabStats from "../LabStats/LabStats";

import Toast from "../../components/Toast/Toast";

export default function LabExplanation() {
  return (
    <div className="explanationContainer">
      <div className="accord">
        <LabAccordion />
        <VerticalLine />
      </div>
      <div className="rest">
        <LabStats />
      </div>
    </div>
  );
}
