import React from 'react'
import { Navbar } from '../components'
import ForgetPassword from '../containers/ForgetPassword/ForgetPassword'
import Error404 from "../components/error/Error"
import { useContext } from "react";
import { UserContext } from "../App";

export default function Forget() {
    const user = useContext(UserContext);

  return (
    <>
    {!user && <div>
        <Navbar/>
        <ForgetPassword/>
    </div>}
    {user && <Error404/>}
    </>
    
  )
}
