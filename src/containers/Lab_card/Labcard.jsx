import React from "react";
import "./labcard.css";
import Labs from "../../components/Labs/Labs";
import bruteforce from "../../assets/bruteforce.png";
import xss from "../../assets/xss.png";
import csrf from "../../assets/csrf.png";
import sql from "../../assets/sqlinjection.png";
import weakid from "../../assets/id.png";

import learn from "../../assets/learn.png";
import file from "../../assets/fileupload.png";
const Labcard = () => (
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
export default Labcard;
