import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatis.css";

const Whatis = () => (
  <div className="gp__whatis section__margin" id="wgp">
    <div className="gp__whatis-feature">
      <Feature
        title="What is X-Defense ?"
        text="website that help you to learn how to secure your deployed website from ux,coding,more&more."
      />
    </div>
    <div className="gp__whatis-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
    </div>
    <div className="gp__whatis-container">
      <Feature title="Education" />
      <Feature title="Exploring" />
      <Feature title="Pentesting" />
    </div>
  </div>
);

export default Whatis;
