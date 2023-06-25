import React from "react";
import "./cta.css";
import {useNavigate} from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();
  const navigatesignup = () => {
    navigate('/signup');
  };

  return(
    <>
  <div className="gp__cta">
    <div className="gp__cta-content">
      <p>Request Early Access to Get Started</p>
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className="gp__cta-btn">
      <button type="button" onClick={navigatesignup}>Get Started</button>
    </div>
  </div>
  </>
  );
};

export default CTA;