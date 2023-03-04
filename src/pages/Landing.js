import React from "react";
import { Footer, Blog, Damage, Features, Whatis, Header } from "../containers";
import { CTA } from "../components";

export default function landing() {
  return (
    <>
      <Whatis />
      <Damage />
      <CTA />
      <Blog />
      <Footer />
    </>
  );
}
