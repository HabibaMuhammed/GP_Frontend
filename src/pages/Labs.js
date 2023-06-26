import { useContext } from "react";
import { Labcard } from "../containers";
import { NavbarLab, Navbar } from "../components";
import { UserContext } from "../App";
import SideBar from "../components/SideBar/SideBar";

export default function Labs() {
  const user = useContext(UserContext);

  return (
    <>
      {!user && <Navbar />}
      {user && <NavbarLab user={user} />}
      <Labcard />
      {user && <SideBar />}
    </>
  );
}
