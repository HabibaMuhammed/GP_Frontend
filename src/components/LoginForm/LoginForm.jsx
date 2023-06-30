import React, { useRef,useState } from "react";
import axios from "axios";
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { Slide, ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Card from "../Card/Card";
import GoogleIcon from "@mui/icons-material/Google";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const LoginForm = ({onLogin}) => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const [errorMessages, setErrorMessages] = useState({});
  const ref = useRef(null);
  const navigate = useNavigate();
  const navigatesignup = () => {
    navigate('/signup');
  }
  const yupValidation= Yup.object().shape({
    email: Yup.string()
      .required('Please enter some value.').email(),
    password: Yup.string().required('password is mendatory').min(8, 'Add minimum 4 characters'),
  });
  const formOptions = { resolver: yupResolver(yupValidation) }
  const { register, formState } = useForm(formOptions)

  const { errors } = formState

  const handleSubmit = async (e) => {
    // Prevent page from reloading
    e.preventDefault();

    setemail('');
    setPassword('');

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
      }, 1000);
      
    }catch(error){
      console.log(error);
      toast.error("Invalid E-mail or Password ! \n Please try a valid Email or Password",{transition:Slide})
      setTimeout(() => {
      }, 800);
    }
  
    };

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
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            {...register('email')}
            onChange={(e) => setemail(e.target.value)}
            required
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
          
          <input
            type="password"
            placeholder="Password"
            feedbackInvalid="please provide a valid password"
            value={password}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            {...register('password')}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <input type="submit" value="LogIn" className="login_button"/>
        <ToastContainer/>
      </form>
      <div className="link_container">
        <Link to="/forget" className="small">
          Forgot Password?
        </Link>
      </div>
      <div className="link_container">
        <a href="" className="small" onClick={navigatesignup}>
          Not Registered Yet?
        </a>
      </div>
      <div className="icons">
        <GoogleIcon className="icon" />
        <GithubIcon className="icon" />
        <LinkedInIcon className="icon" />
      </div>
    </Card>
  );
};

export default LoginForm;