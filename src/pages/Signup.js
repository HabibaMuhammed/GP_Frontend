import { useContext } from "react";
import { UserContext } from "../App";
import { Navbar, NavbarLab } from "../components";
import SignUpForm from "../components/SignUpForm/SignUpForm";

export default function Signup() {
  
  const user = useContext(UserContext);

  return (
    <>
      {!user && <Navbar />}
      {user && <NavbarLab user={user} />}
      <SignUpForm />
    </>
  );
}
