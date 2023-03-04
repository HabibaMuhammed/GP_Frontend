import React from "react";
import { Footer, Blog, Damage, Whatis, Header } from "../containers";
import { CTA, Navbar } from "../components";

export default function landing() {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Whatis />
      <Damage />
      <CTA />
      <Blog />
      <Footer />
    </>
  );
}
