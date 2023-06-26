import "./labcard.css";
import Labs from "../../components/Labs/Labs";
import learn from "../../assets/learn.png";

import React, { useState, useEffect } from "react";

const Labcard = () => {
  const [componentsData, setComponentsData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:5001/api/labs/Fetchlabs");
    
    const data = await response.json();
    setComponentsData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const imgbaseUrl = "http://localhost:5001/";
  return (
    <>
      <div className="bigbox">
        <div className="learning">
          <Labs img={learn} title="Learn  Environment" />
        </div>

        <div className="wrapper">
          {componentsData.labs
            ? componentsData.labs.map((it) => {
                return (
                  <>
                   
                    <Labs
                     
                      img={`${imgbaseUrl}${it.icon}`}
                      title={it.name}
                    ></Labs>
                   
                  </>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};
export default Labcard;
