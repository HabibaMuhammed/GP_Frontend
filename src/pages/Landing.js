import { useContext } from "react";
import { Footer, Blog, Damage, Whatis, Header } from "../containers";
import { CTA, Navbar, NavbarLab } from "../components";
import { UserContext } from "../App";
function Landing() {
  const user = useContext(UserContext);


  return (
    <>
      <div className="gradient__bg">
        {!user && <Navbar />}
        {user && <NavbarLab user={user} />}
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

export default Landing;
