import React from "react";
import possibilityImage from "../../assets/damage.png";
import "./damage.css";

const Damage = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Lack of Security :</h4>
      <h1 className="gradient__text">
        The Danger is <br /> beyond your imagination
      </h1>
      <p>
        We’ve come to expect so little from online privacy measures that public
        displays of concern about the matter are more or less for show. Being
        devastated to discover you’ve been tagged in somebody else’s photo has
        an air of the melodramatic about it at this point.So nowadays security
        measures is a MUST.
      </p>
      <h4>Sign up to Get Started</h4>
    </div>
  </div>
);

export default Damage;
