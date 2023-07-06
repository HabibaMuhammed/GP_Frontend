import { useContext } from "react";
import { NavbarLab, Navbar } from "../components";
import LabHeader from "../components/LabHeader/LabHeader";
import { LabExplanation } from "../containers";
import { useParams } from "react-router-dom";
import { UserContext } from "../App";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LabContent() {
  const user = useContext(UserContext);
  // const { parameter } = useParams();
  
  return (
    <>
    {/* console.log(user);
      {!user && <Navbar />}
      {user && <NavbarLab user={user} />}
      <LabHeader />
      <LabExplanation /> */}
    </>
  );
}
