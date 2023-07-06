import React, { useContext } from "react";
import UserProfileData from "../containers/UserProfileData/UserProfileData";
import UserProfileSideBar from "../containers/UserProfileSideBar/UserProfileSideBar";
import { UserContext } from "../App";
import Error404 from "../components/error/Error"

export default function UserProfile() {
  const user = useContext(UserContext);

  return (
    <>
    {user && <div style={{ display: "flex", flexDirection: "row",height:"100vh" }}>
      <UserProfileSideBar user={user} />
      <UserProfileData />
    </div>}
    {!user && <Error404/>}
    </>
  );
}
