import React, { useContext } from "react";
import Admin_AddChallengeContent from "../containers/Admin_AddChallengeContent/Admin_AddChallengeContent";
import AdminProfileSideBar from "../containers/AdminProfileSideBar/AdminProfileSideBar";
import { UserContext } from "../App";
import Error404 from "../components/error/Error";

export default function ChallengeContent() {
  const user = useContext(UserContext);

  return (
    <>
    <div style={{ display: "flex", flexDirection: "row",height:"100vh" }}>
      <AdminProfileSideBar user={user} />
      <Admin_AddChallengeContent/>
    </div>
    </>
  );
}
