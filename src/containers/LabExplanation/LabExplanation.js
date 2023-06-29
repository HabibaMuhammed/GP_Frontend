import React from "react";
import "./LabExplanation.css";
import { LabAccordion, VerticalLine } from "../../components";
import LabStats from "../LabStats/LabStats";

import Toast from "../../components/Toast/Toast";

export default function LabExplanation({headers,content}) {
  console.log(headers);
  return (
    <div className="explanationContainer">
      <div className="accord">
        <LabAccordion headers={headers} content={content} />
        <VerticalLine />
      </div>
      <div className="rest">
        <LabStats />
      </div>
    </div>
  );
}
