import React from "react";
import ChangePassword from "../containers/ChangePassword/ChangePassword";
import { NavLink } from "react-router-dom";
import { Navbar } from "../components";

export default function ResetPassword() {
  return (
    <div>
      <Navbar />
      <ChangePassword />
    </div>
  );
}
