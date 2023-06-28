import { useContext } from "react";
import { Labcard } from "../containers";
import Search_Lab from "../components/Search_Lab/Search_Lab";
import { NavbarLab, Navbar } from "../components";
import { UserContext } from "../App";
import SideBar from "../components/SideBar/SideBar";
import UserBar from "../containers/UserBar/UserBar";

export default function Labs() {
  const user = useContext(UserContext);

  return (
    <>
      {!user && <Navbar />}
      {user && <NavbarLab user={user} />}
      <Search_Lab />
      <Labcard />
      {user && <SideBar />}
      {/* <UserBar/> */}
    </>
  );
}