import "./labcard.css";
import Labs from "../../components/Labs/Labs";
import bruteforce from "../../assets/bruteforce.png";
import axios from "axios";
import xss from "../../assets/xss.png";
import csrf from "../../assets/csrf.png";
import sql from "../../assets/sqlinjection.png";
import weakid from "../../assets/id.png";
import learn from "../../assets/learn.png";
import file from "../../assets/fileupload.png";
import React, { useState, useEffect } from "react";
const Labcard = () => {



  const [componentsData, setComponentsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    const response = await fetch('http://localhost:5001/api/labs/Fetchlabs');
    const data = await response.json();
    
      setComponentsData(data);
    };

    fetchData();
  }, []);


console.log(componentsData);




  return(
  <div className="bigbox">
    <div className="learning">
      <Labs img={learn} title="Learn  Environment" />
    </div>
   
    <div className="wrapper">
      <Labs img={sql} title="Sql Injection" />
      <Labs img={xss} title="XSS" />
      <Labs img={csrf} title="CSRF" />
      <Labs img={bruteforce} title="Brute Force" />
      <Labs img={weakid} title="Weak ID" />
      <Labs img={file} title="File Upload" />
      <Labs img={sql} title="Sql Injection" />
      <Labs img={xss} title="XSS" />
      <Labs img={csrf} title="CSRF" />
      <Labs img={bruteforce} title="Brute Force" />
      <Labs img={weakid} title="Weak ID" />
      <Labs img={file} title="File Upload" />
    </div>
   
  </div>
  );
};
export default Labcard;
