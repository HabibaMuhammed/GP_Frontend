import React from "react";
import "./brand.css";
import google from "../../assets/google.png";
import docker from "../../assets/docker.png";
import vs from "../../assets/vs.png";
const Brand = () => (
  <div className="gp__brand section__padding">
    <div className="google">
      <img src={google} alt="google" />
    </div>
    <div>
      <img src={docker} alt="google" />
    </div>
    <div>
      <img src={vs} alt="google" />
      <p>Vs-Code</p>
    </div>
  </div>
);

export default Brand;
