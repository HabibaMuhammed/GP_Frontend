import React from "react";
import bubbles from "../../assets/bubbles.png";
import "./Toast.css";
export default function Toast({ success }) {
  
  return (
    <>
      {success && (
        <div className="toastContainer">
          <img className="toastImg" src={bubbles} alt="bubbles" />
          <div className="toastBody">
            <h1 className="toastTitle">Well Done!</h1>
            <p className="toastText">
              You have completed this lab successfully.You have completed this
              lab successfully.
            </p>
          </div>
        </div>
      )}
       {!success && (
        <div className="toastContainerWrong">
          <img className="toastImg" src={bubbles} alt="bubbles" />
          <div className="toastBody">
            <h1 className="toastTitle">Oh Snap!</h1>
            <p className="toastText">
            Change a few things up and try submitting again.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
import React from "react";
import bubbles from "../../assets/bubbles.png";
import "./Toast.css";
export default function Toast({ success }) {
  
  return (
    <>
      {success && (
        <div className="toastContainer">
          <img className="toastImg" src={bubbles} alt="bubbles" />
          <div className="toastBody">
            <h1 className="toastTitle">Well Done!</h1>
            <p className="toastText">
              You have completed this lab successfully.You have completed this
              lab successfully.
            </p>
          </div>
        </div>
      )}
       {!success && (
        <div className="toastContainerWrong">
          <img className="toastImg" src={bubbles} alt="bubbles" />
          <div className="toastBody">
            <h1 className="toastTitle">Oh Snap!</h1>
            <p className="toastText">
            Change a few things up and try submitting again.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
