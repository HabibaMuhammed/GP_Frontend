import React, {useContext} from "react";
import "./UserProfileSideBar.css";
import User from "../../assets/user.png";
import Edit from "../../assets/Vector.png";
import { LogoutContext } from "../../App";

import { Link,useNavigate  } from "react-router-dom";
export default function UserProfileSideBar({ user }) {
  const handleLogout = useContext(LogoutContext);
  const navigate = useNavigate();

  const onLogoutClick = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <div className="UserProfileSideBarContainer">
      <div className="UserProfileSideBarPhotos">
        <img src={User} className="UserProfileSideBarImg" />
      <button class="image-button">
        <img src={Edit} alt="Button Image" />
      </button>
      </div>

      <h2 className="UserProfileSideBarName">{user}</h2>
      <div>
        <ul className="UserProfileSideBar">
          <li >
            <Link
              exact
              className="UserProfileSideBarLi"
              to="/profile"
            >
              My Profile
            </Link>
          </li>
          <li>
          <Link
              exact
              className="UserProfileSideBarLi"
              to="/labs"
            >
              Labs
            </Link>

          </li>
          <li>
          <Link
              exact
              className="UserProfileSideBarLi"
              to="/settings"
            >
              Settings
            </Link>

          </li>
          <li>
          <Link
              exact
              className="UserProfileSideBarLi"
              to="/"
              onClick={onLogoutClick}
            >
              Logout
            </Link>

          </li>
        </ul>
      </div>
    </div>
  );
}
