import React, { useContext } from "react";
import "./DeleteAccount.css";
import { FaExclamationTriangle } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { LogoutContext } from "../../App";
import { useNavigate } from "react-router-dom";

import { Slide, ToastContainer,toast } from "react-toastify";

export default function DeleteAccount() {
  const handleLogout = useContext(LogoutContext);
  const navigate = useNavigate();

  const handleClick = (e) => {
    const token = JSON.parse(localStorage.getItem("token"));
    e.preventDefault();
    const reqURL = "http://localhost:5001/api/user/Delete";

    axios
      .delete(reqURL, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        if (response.data.message === "User Deleted successfully") {
          toast.success("Deleted Successfully!", { transition: Slide });
        
          setTimeout(() => {
            handleLogout();
            navigate("/");
          }, 5000); // Delay for 10 seconds (10000 milliseconds)
        }
        
        else  if (response.data.message === "not found "){
          toast.error("not found",{transition:Slide})
        }
        else  if (response.data.message === "User not found"){
          toast.error("user not found",{transition:Slide})
        }
      })
      .catch((error) => {
      });
    setTimeout(() => {
    }, 3000);
  };
  return (
    <div className="DeleteAccountContainer">
      <div className="DeleteAccountInputContainer">
        <h2 className="DeleteAccountTitle">
          <AiOutlineDelete style={{ color: "black", fontSize: "48px" , marginRight: "2px"}} />
          Delete Your Account:
        </h2>
        <span className="DeleteAccountWarning">
          {" "}
          <FaExclamationTriangle
            style={{ color: "#ff4820", fontSize: "16px", marginRight: "2px" }}
          />
          Warning: If you delete your account you will lose definitive access to
          it with no way of recovery. Your personal data and progress will be
          erased and lost as well as any ongoing subscription.
        </span>
        <button onClick={handleClick} className="DeleteAccountBtn">
          Delete My Account
        </button>
      </div>
    </div>
  );
}
