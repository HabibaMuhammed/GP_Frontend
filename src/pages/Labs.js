import React from "react";
import { Labcard } from "../containers";
import Search_Lab from "../components/Search_Lab/Search_Lab";
import { NavbarLab } from "../components";

export default function Labs() {
  return (
    <>
      <NavbarLab/>
      <Search_Lab />
      <Labcard />
    </>
  );
}
