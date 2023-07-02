import React, { useContext } from "react";
import Admin_AddNewChallenge from "../containers/Admin_AddNewChallenge/Admin_AddNewChallenge";
import AdminProfileSideBar from "../containers/AdminProfileSideBar/AdminProfileSideBar";
import { UserContext } from "../App";
import Error404 from "../components/error/Error";
import jwtdecode from "jwt-decode";
export default function AdminProfile() {
  const user = useContext(UserContext);
  const token = JSON.parse(localStorage.getItem("token"));
  const decodedtoken = jwtdecode(token);
  let isAdmin = decodedtoken.isAdmin;
  return (
    <>
      {!isAdmin && !user && <Error404 />}
      {!isAdmin && user && <Error404 />}
      <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
        {isAdmin && <AdminProfileSideBar user={user} />}
        {isAdmin && <Admin_AddNewChallenge />}
      </div>
    </>
  );
}
