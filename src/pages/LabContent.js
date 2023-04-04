import React from "react";
import { NavbarLab } from "../components";
import LabHeader from "../components/LabHeader/LabHeader";
import { LabExplanation } from "../containers";
export default function LabContent() {
  return (
    <>
      <NavbarLab />
      <LabHeader />
      <LabExplanation />
    </>
  );
}
