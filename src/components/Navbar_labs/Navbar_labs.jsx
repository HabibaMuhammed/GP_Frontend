import React, { useContext } from "react";
import User from "../../assets/user.png";
import bell from "../../assets/bell.png";
import "./navbar_lab.css";
import { Link } from "react-router-dom";
import { LogoutContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Navbar_labs = ({ user }) => {
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
            <Link to="/labs">Labs</Link>
          </p>
        </div>
      </div>
      <div className="gp__navbar-user gp__navbar-links_container">
        <img src={User} alt="user" />
        <p>
            <Link to="/profile">{user}</Link>
          </p>
      </div>
      <button className="logoutBtn" type="button" onClick={onLogoutClick}>
        Log Out
      </button>

      <div className="icons">
        <img src={bell} alt="nofication" />
      </div>
    </div>
  );
};

export default Navbar_labs;
