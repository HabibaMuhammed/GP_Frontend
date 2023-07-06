import React, { useContext } from "react";
import ChangePassword from "../containers/ChangePassword/ChangePassword";
import { Navbar } from "../components";
import { UserContext } from "../App";
import Error404 from "../components/error/Error";

export default function ResetPassword() {
  const user = useContext(UserContext);

  return (
    <>
      {!user && (
        <div>
          <Navbar />
          <ChangePassword />
        </div>
      )}
      {user && (
        <div>
          <Error404 />
        </div>
      )}
    </>
  );
}
