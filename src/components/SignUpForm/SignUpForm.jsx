import React, { useState } from "react";
import "./SignUpForm.css";
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm,} from 'react-hook-form';
import { Slide, ToastContainer,toast } from "react-toastify";
import Card from "../Card/Card";
import bg from "../../assets/shield (1).png";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { clear } from "@testing-library/user-event/dist/clear";
import PasswordStrengthBar from 'react-password-strength-bar';
const SignUpForm = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate();

  const yupValidation= Yup.object().shape({
    firstName:Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    lastName:Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().required('Please enter some value.').email('Must be a valid email'),
    password: Yup.string().required('password is mendatory').min(8, 'Add minimum 8 characters'),
    confirmpassword: Yup.string().required('password is mendatory').min(8, 'Add minimum 8 characters'),
  });
  const formOptions = { resolver: yupResolver(yupValidation) }
  const { register, formState } = useForm(formOptions)

  const { errors } = formState

  const error = {
    InvalidLength: "Please add at least 8 characters",
    doesnotmatch: "Passwords donot match"
  };


  //console.log(firstName, lastName, email, password);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 8 ){
      setErrorMessages({
        name: "InvalidLength",
        message: error.InvalidLength,
      })
      return;
    }
    if(typeof password !== "undefined" && typeof confirmpassword !=="undefined")
    {
      if(password != confirmpassword)
      {
        setErrorMessages({
          name: "doesnotmatch",
          message: error.doesnotmatch,
        })
        return;
      }
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
      <p className="error_msg" style={{marginTop:-15, marginBottom:10}}>{errorMessages.message}</p>
    );
  return (
    <div style={{ height:600,width:700}} >
      <Card>
      <h1 className="title">Sign Up</h1>
      <p className="subtitle">Please SignUp using your Data !</p>
      <form onSubmit={handleSubmit}>
        <div className="inputs_container">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            
            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
            {...register('firstname')}
            onChange={(e) => setfirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
            {...register('lastName')}
            onChange={(e) => setlastName(e.target.value)}
            required
          />
          <input
            type="email" 
            placeholder="E-mail"
            value={email}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            {...register('email')}
            onChange={(e) => setemail(e.target.value)}
            required
          />
          <input
            type="password" 
            placeholder="Password"
            value={password}
            className={`form-control ${errors.password}`}
            {...register('password')}
            onChange={(e) => setPassword(e.target.value)}

            required
          />
          <PasswordStrengthBar password={password} />
          {renderErrorMsg("InvalidLength")}

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmpassword}
            className={`form-control ${errors.confirmpassword}`}
            {...register('confirmpassword')}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {renderErrorMsg("doesnotmatch")}
        </div>
        <input type="submit" value="Register" className="SignUp_button" />
        <ToastContainer/>
      </form>
      </Card>
    <div> 
    <p className="quote">Start learning blue team skills with hands-on courses</p>
    <img src={bg} alt="" className="img2" />
    </div>
    </div>
  );
};

export default SignUpForm ;