import { useContext } from "react";
import { Navbar, NavbarLab } from "../components";
import LoginForm from "../components/LoginForm/LoginForm";
import { UserContext } from "../App";

export default function Login({ onLogin }) {
  const user = useContext(UserContext);

  const handleLogin = (userData) => {
    onLogin(userData);
  };

  return (
    <>
      {!user && <Navbar />}
      {user && <NavbarLab user={user} />}
      <LoginForm onLogin={handleLogin} />
    </>
  );
}
