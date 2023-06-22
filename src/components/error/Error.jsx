import React from "react";
import "./Error.css";
import pic from "../../assets/404.png";


const PageNotFound = () => {
  return (
    <div
      style={{
        width: 1518,
        height: 750,
        background:
          "linear-gradient(155.23deg, #040C18 2.74%, rgba(4, 40, 76, 0.934375) 83.3%, rgba(3, 27, 52, 0.9) 98.22%)",
      }}
    >
      <img src={pic} alt="" className="img" />
      <h1 className="h1"> Oh No! </h1>
      <p className="h"> The Page you are looking for can not be found</p>
      <button className="b1">Try Again ! </button>
    </div>
  );
};

export default PageNotFound;
