import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { Slide, ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Card from "../Card/Card";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const LoginForm = ({onLogin}) => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate();

  const errors = {
    noemail: "Please enter your email",
    noPassword: "Please enter your password",
  };

  const handleSubmit = async (e) => {
    // Prevent page from reloading
    e.preventDefault();
    if (!email) {
      // Username input is empty
      setErrorMessages({ name: "noemail", message: errors.noemail });
      return;
    }

    else if (!password) {
      // Password input is empty
      setErrorMessages({ name: "noPassword", message: errors.noPassword });
      return;
    }
    else {
      try{const { data } = await axios.post("http://localhost:5001/api/user/login",{
        email:email,
        password:password,
      });
      if (data && data.password === password) { 
        setauthenticated(true)
        localStorage.setItem("authenticated", true);}
      localStorage.clear();
      onLogin(data.name); // call the callback function with the user data

      localStorage.setItem("token", JSON.stringify(data.token));
      toast.success("Logged in Successfully !",{transition:Slide})
      setTimeout(() => {
        navigate('/labs');
      }, 2000);
      
    }catch(error){
      console.log(error);
    }
  }
    };

    // Search for user credentials

  // Render error messages
  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );

  return (
    <Card>
      <h1 className="title">Sign In</h1>
      <p className="subtitle">Please login using your email and password!</p>
      <form onSubmit={handleSubmit}>
        <div className="inputs_container">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          {renderErrorMsg("email")}
          {renderErrorMsg("noemail")}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {renderErrorMsg("password")}
          {renderErrorMsg("noPassword")}
        </div>
        <input type="submit" value="LogIn" className="login_button" />
        <ToastContainer/>
      </form>
      <div className="link_container">
        <a href="" className="small">
          Forgot Password?
        </a>
      </div>
      <div className="link_container">
        <a href="" className="small">
          Not Registered Yet?
        </a>
      </div>
      <div className="icons">
        <GoogleIcon className="icon" />
        <FacebookIcon className="icon" />
        <TwitterIcon className="icon" />
      </div>
    </Card>
  );
};

export default LoginForm;