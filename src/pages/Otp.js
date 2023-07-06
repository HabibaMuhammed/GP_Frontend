import React,{useContext} from "react";
import OTP from "../containers/OTP/OTP";
import { Navbar } from "../components";
import { UserContext } from "../App";
import Error404 from "../components/error/Error";

export default function Otp() {
  const user = useContext(UserContext);

  return (
    <>
      {!user && (
        <div>
          <Navbar />
          <OTP />
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
