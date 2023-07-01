import React from "react";
import "./LabExplanation.css";
import { LabAccordion, VerticalLine } from "../../components";
import LabStats from "../LabStats/LabStats";


export default function LabExplanation({headers,content,id,container}) {
  console.log(headers);
  return (
    <div className="explanationContainer">
      <div className="accord">
        <LabAccordion headers={headers} content={content} id={id} container={container} />
        <VerticalLine />
      </div>
      <div className="rest">
        <LabStats />
      </div>
    </div>
  );
}
