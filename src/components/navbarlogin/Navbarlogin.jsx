import "./navbarlogin.css";
import React, { useContext } from "react";
import User from "../../assets/user.png";

import { Link } from "react-router-dom";
import { LogoutContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Navbarlogin = ({ user }) => {
  const handleLogout = useContext(LogoutContext);
  const navigate = useNavigate();

  const onLogoutClick = () => {
    handleLogout();
    navigate("/");
  };
  return (
    <div className="gp__navbar">
      <div className="gp__navbar-links">
        <div className="gp__navbar-links_logo">
          <Link to="/">
            <h1>X-Defense</h1>
          </Link>
        </div>
        <div className="gp__navbar-links_container">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <a href="#what">What is X-defense?</a>
          </p>
          <p>
            <Link to="/labs">Labs</Link>
          </p>
        </div>
      </div>
      <div className="gp__navbar-user">
        <img src={User} alt="user" />
        <Link to="/profile">
          <p>{user}</p>
        </Link>
      </div>

      <button className="logoutBtn" type="button" onClick={onLogoutClick}>
        Log Out
      </button>
    </div>
  );
};

export default Navbarlogin;
