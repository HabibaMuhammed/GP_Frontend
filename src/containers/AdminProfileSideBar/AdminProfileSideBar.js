import React, {useContext} from "react";
import "./AdminProfileSideBar.css";
import Admin from "../../assets/Admin.png";
import { LogoutContext } from "../../App";

import { Link,useNavigate  } from "react-router-dom";
export default function AdminProfileSideBar() {
  const handleLogout = useContext(LogoutContext);
  const navigate = useNavigate();

  const onLogoutClick = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <div className="AdminProfileSideBarContainer">
      <div className="AdminProfileSideBarPhotos">
        <img src={Admin} alt="ADMIN" className="AdminProfileSideBarImg" />
      </div>

      <h2 className="AdminProfileSideBarName">{"Admin"}</h2>
      <div>
        <ul className="AdminProfileSideBar">
          <li >
            <Link
              exact
              className="AdminProfileSideBarLi"
              to="/Admin"
            >
              Add New Challenge
            </Link>
          </li>

          <li>
          <Link
              exact
              className="AdminProfileSideBarLi"
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
