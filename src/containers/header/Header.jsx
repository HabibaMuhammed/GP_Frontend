import React from "react";
import people from "../../assets/people.png";
import sec from "../../assets/sec.png";
import "./header.css";

const Header = () => (
  <div className="gp__header section__padding" id="home">
    <div className="gp__header-content">
      <h1 className="gradient__text">
        Let’s Defense our amazing websites with X-defense
      </h1>
      <p>
        The companies that do the best job on managing a user’s privacy will be
        the companies that ultimately are the most successful.
      </p>

      <div className="gp__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gp__header-content__people">
        <img src={people} alt="ppl" />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gp__header-image">
      <img src={sec} alt="sec" />
    </div>
  </div>
);

export default Header;
