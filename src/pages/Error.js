import { useContext } from "react";
import { UserContext } from "../App";
import { Navbar, NavbarLab } from "../components";
import Error404 from "../components/error/Error"

export default function Error() {
  const user = useContext(UserContext);

  return (
    <>
      {!user && <Navbar />}
      {user && <NavbarLab user={user} />}
      <Error404/>
     
    </>
  );
}
