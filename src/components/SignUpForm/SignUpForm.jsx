import React, { useState } from "react";
import "./SignUpForm.css";
import { Slide, ToastContainer,toast } from "react-toastify";
import Card from "../Card/Card";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { clear } from "@testing-library/user-event/dist/clear";

const SignUpForm = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate();

  const errors = {
    nofirstName: "Please enter your first name",
    nolastName: "Please enter your last name",
    noEmail: "Please enter your email",
    noPassword: "Please enter your password",
    noConfirmedPassword: "Please confirm your password",
  };
  //console.log(firstName, lastName, email, password);
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(firstName, lastName, email, password);

    if (!firstName) {
      // Username input is empty
      setErrorMessages({ name: "nofirstName", message: errors.nofirstName });
      return;
    }
    if (!lastName) {
      setErrorMessages({ name: "nolastName", message: errors.nolastName });
      return;
    }
    if (!email) {
      setErrorMessages({ name: "email", message: errors.noEmail });
      return;
    }

    if (!password) {
      // Password input is empty
      setErrorMessages({ name: "noPassword", message: errors.noPassword });
      return;
    }
    if (!confirmpassword) {
      setErrorMessages({
        name: "noConfirmedPassword",
        message: errors.noConfirmedPassword,
      });
      return;
    }
    fetch("http://localhost:5001/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    })
      .then((res) => res)
      .then((data) => {
        if (data.status === 200) {
          toast.success("Registered Successfully !",{transition:Slide})
          setTimeout(() => {
            navigate('/login',{state:{email:data.email}});
          }, 3000);
        } else {
         toast.info("You are already Registered !",{transition:Slide})
          clear();
        }
      });

  };

  // Render error messages
  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );

  return (
    <Card>
      <h1 className="title">Sign Up</h1>
      <p className="subtitle">Please SignUp using your Data !</p>
      <form onSubmit={handleSubmit}>
        <div className="inputs_container">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
          {renderErrorMsg("firstName")}
          {renderErrorMsg("nofirstName")}
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
          {renderErrorMsg("lastName")}
          {renderErrorMsg("nolastName")}
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          {renderErrorMsg("email")}
          {renderErrorMsg("noEmail")}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {renderErrorMsg("password")}
          {renderErrorMsg("noPassword")}
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {renderErrorMsg("confirmpassword")}
          {renderErrorMsg("noConfirmedPassword")}
        </div>
        <input type="submit" value="Register" className="SignUp_button" />
        <ToastContainer/>
      </form>
    </Card>
  );
};

export default SignUpForm;