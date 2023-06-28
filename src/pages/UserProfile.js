import React, { useContext } from "react";
import UserProfileData from "../containers/UserProfileData/UserProfileData";
import RecentChallenges from "../components/RecentChallenges/RecentChallenges";
import UserProfileSideBar from "../containers/UserProfileSideBar/UserProfileSideBar";
import { UserContext } from "../App";
import Error404 from "../components/error/Error"

export default function UserProfile() {
  const user = useContext(UserContext);

  return (
    <>
    {user && <div style={{ display: "flex", flexDirection: "row" }}>
      <UserProfileSideBar user={user} />
      <UserProfileData />
    </div>}
    {!user && <Error404/>}
    </>
  );
}
