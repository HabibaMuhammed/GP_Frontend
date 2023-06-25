import React from "react";
import UserProfileData from "../containers/UserProfileData/UserProfileData";
import RecentChallenges from "../components/RecentChallenges/RecentChallenges";
import UserProfileSideBar from "../containers/UserProfileSideBar/UserProfileSideBar";

export default function UserProfile() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <UserProfileSideBar name="Mohammad Ahmed" />
      <UserProfileData />
    </div>
  );
}
