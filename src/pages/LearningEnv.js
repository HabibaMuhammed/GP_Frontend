import { useContext } from "react";
import { NavbarLab, Navbar } from "../components";
import LearnHeader from "../components/LearnHeader/LearnHeader";
import {LearningSteps} from "../containers";
import { UserContext } from "../App";

export default function LearningEnv() {
  const user = useContext(UserContext);

  return (
    <>
      {!user && <Navbar />}
      {user && <NavbarLab user={user} />}
      <LearnHeader/>
      <LearningSteps/>
    </>
  );
}
