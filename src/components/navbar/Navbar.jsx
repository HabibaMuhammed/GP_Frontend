import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

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
            <a href="#labs">Labs</a>
          </p>
        </div>
      </div>
      <div className="gp__navbar-sign">
        <Link to="/login">
          <p>Sign in</p>
        </Link>
        <Link to="/signup">
          <button type="button">Sign up</button>
        </Link>
      </div>
      <div className="gp__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gp__navbar-menu_container scale-up-center">
            <div className="gp__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#what">What is GPT3?</a>
              </p>
              <p>
                <a href="#Labs">Labs</a>
              </p>
            </div>
            <div className="gp__navbar-menu_container-links-sign">
              <Link to="\login">
                <p>Sign in</p>
              </Link>
              <Link to="\signup">
                <button type="button">Sign up</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
