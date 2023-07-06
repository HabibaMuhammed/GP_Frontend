import React, { useContext } from "react";
import UserProfileSideBar from "../containers/UserProfileSideBar/UserProfileSideBar";
import SettingsContent from "../containers/SettingsContent/SettingsContent";
import Error404 from "../components/error/Error"
import { UserContext } from "../App";


export default function Settings() {
  const user = useContext(UserContext);
  return (
    <>
      {user && (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <UserProfileSideBar user={user} />
          <SettingsContent />
        </div>
      )}
      {!user && <Error404/>}

    </>
  );
}
