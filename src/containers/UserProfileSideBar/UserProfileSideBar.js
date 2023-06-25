import React from "react";
import "./UserProfileSideBar.css";
import User from "../../assets/user.png";
import Edit from "../../assets/Vector.png";

import { Link, NavLink } from "react-router-dom";
export default function UserProfileSideBar({ name }) {
  return (
    <div className="UserProfileSideBarContainer">
      <div className="UserProfileSideBarPhotos">
        <img src={User} className="UserProfileSideBarImg" />
      <button class="image-button">
        <img src={Edit} alt="Button Image" />
      </button>
      </div>
      

      <h2 className="UserProfileSideBarName">{name}</h2>
      <div>
        <ul className="UserProfileSideBar">
          <li >
            <Link
              exact
              className="UserProfileSideBarLi"
              to="/"
            >
              My Profile
            </Link>
          </li>
          <li>
          <Link
              exact
              className="UserProfileSideBarLi"
              to="/"
            >
              Labs
            </Link>

          </li>
          <li>
          <Link
              exact
              className="UserProfileSideBarLi"
              to="/"
            >
              Settings
            </Link>

          </li>
          <li>
          <Link
              exact
              className="UserProfileSideBarLi"
              to="/"
            >
              Logout
            </Link>

          </li>
        </ul>
      </div>
    </div>
  );
}
