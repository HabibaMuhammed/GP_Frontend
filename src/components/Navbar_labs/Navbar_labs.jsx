import React from "react";
import User from "../../assets/user.png";
import bell from "../../assets/bell.png";
import "./navbar_lab.css";
import { Link } from "react-router-dom";
const Navbar_labs = () => {
  return (
    <div className="gp__navbar">
      <div className="gp__navbar-links">
        <div className="gp__navbar-links_logo">
        <Link to="/">
            <h1>X-Defense</h1>
          </Link>        </div>
      </div>
      <div className="gp__navbar-user">
        <img src={User} alt="user" />
        <p>mohamed</p>
      </div>
      <div className="icons">
        <img src={bell} alt="nofication" />
      </div>
    </div>
  );
};

export default Navbar_labs;
