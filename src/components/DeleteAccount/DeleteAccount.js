import React, { useState } from "react";
import "./DeleteAccount.css";
import { FaExclamationTriangle } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";

export default function DeleteAccount() {
  const handleClick = () => {
    // Perform additional logic here
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
