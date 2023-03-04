import React, { useState } from "react";
import "./SignUpForm.css";
import Card from "../Card/Card";

const SignUpForm = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    nofname: "Please enter your first name",
    nolname: "Please enter your last name",
    noEmail: "Please enter your email",
    noPassword: "Please enter your password",
    noConfirmedPassword: "Please confirm your password",
  };

  const handleSubmit = (e) => {
    // Prevent page from reloading
    e.preventDefault();

    if (!fname) {
      // Username input is empty
      setErrorMessages({ name: "nofname", message: errors.nofname });
      return;
    }
    if (!lname) {
      setErrorMessages({ name: "nolname", message: errors.nolname });
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
            value={fname}
            onChange={(e) => setfname(e.target.value)}
          />
          {renderErrorMsg("fname")}
          {renderErrorMsg("nofname")}
          <input
            type="text"
            placeholder="Last Name"
            value={lname}
            onChange={(e) => setlname(e.target.value)}
          />
          {renderErrorMsg("lname")}
          {renderErrorMsg("nolname")}
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
      </form>
    </Card>
  );
};

export default SignUpForm;
