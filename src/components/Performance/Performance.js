import React from "react";
import "./Performance.css";
import axios from "axios";
import { useState } from "react";

export default function Performance() {
  const totalNumberOfLabs = 12;
  const [count, setCount] = useState(0);
  // remove this after merging
  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmI4OWU1NzVhODFjOTAwNWQ5NWJiMiIsImlhdCI6MTY4MDU3NzEwMn0.zAG78rvGx3boq-wTEXB0RCaWIGdUg6CwpM7bsCA2zvM"
  );
  const token = localStorage.getItem("token");
  axios
    .get("http://localhost:5001/api/labs/number", {
      headers: {
        Authorization: `${token}`,
      },
    })
    .then((response) => {
      setCount(response.data.numberOfSolvedLabs);
    })
    .catch((error) => {
      console.error(error);
    });
  let result = (count / totalNumberOfLabs) * 100;
  result = Math.ceil(result);
  let resInDegree = Math.ceil((result * 180) / 100);

  let resInNegDegree = resInDegree - 180;
  console.log(resInNegDegree);
  return (
    <div className="PerformanceContainer">
      <h2 className="per">Performance</h2>
      <h3 className="sub">Total labs</h3>
      <h1 className="number">{count}</h1>
      <h3 className="sub">Keep going!</h3>
      <div>
        <div className="mask">
          <div className="semi-circle"></div>
          <div
            style={{
              transform: `rotate(${resInDegree}deg) translate3d(0, 0, 0)`,
            }}
            className="semi-circle--mask"
          ></div>
          <div
            style={{
              transform: `translateX(-50%) rotate(${resInNegDegree}deg)`,
            }}
            className="bar"
          >
            <div className="bar-bar-bar"></div>
          </div>
          <div className="percentage">{result}%</div>
        </div>
      </div>
    </div>
  );
}
