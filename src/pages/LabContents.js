import { useContext } from "react";
import { NavbarLab, Navbar } from "../components";
import LabHeader from "../components/LabHeader/LabHeader";
import { LabExplanation } from "../containers";
import { UserContext } from "../App";
//import SideBar from "../components/SideBar/SideBar";
export default function LabContent() {
  const user = useContext(UserContext);

  return (
    <>
      {!user && <Navbar />}
      {user && <NavbarLab user={user} />}
      <LabHeader />
      <LabExplanation />
      
    </>
  );
}
