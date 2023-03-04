import React from "react";
import "./footer.css";
import Brand from "../../components/brand/Brand";

const Footer = () => (
  <div className="gp__footer section__padding">
    <div className="gp__footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the <br></br>future before others
      </h1>
    </div>
    <div className="gp__footer-btn">
      <p>ALL you Need</p>
    </div>
    <Brand />
    <div className="gp__footer-links">
      <div className="gp__footer-links_logo">
        <h1>X-Defense</h1>
      </div>
      <br />
      <div className="gp__footer-links_div">
        <br />

        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gp__footer-links_div">
        <br />

        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gp__footer-links_div">
        <br />

        <h4>Get in touch</h4>
        <p>Ainshams-university</p>
        <p>085-132567</p>
        <p>info@X-defense.net</p>
      </div>
    </div>

    <div className="gp__footer-copyright">
      <br />
      <p>@2023 X-Defense. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
