import React, { useContext } from "react";
import Admin_AddNewChallenge from "../containers/Admin_AddNewChallenge/Admin_AddNewChallenge";
import AdminProfileSideBar from "../containers/AdminProfileSideBar/AdminProfileSideBar";
import { UserContext } from "../App";
import Error404 from "../components/error/Error";

export default function AdminProfile() {
  const user = useContext(UserContext);

  return (
    <>
    <div style={{ display: "flex", flexDirection: "row",height:"100vh" }}>
      <AdminProfileSideBar user={user} />
      <Admin_AddNewChallenge/>
    </div>
    
    </>
  );
}
