import React from "react";
import "./Error.css";
import pic from "../../assets/404.png";

const PageNotFound = () => {

  const refresh=setTimeout(()=>
  {
    window.location.reload(true);
    window.location.replace('http://localhost:3000/');
  },3000);
  
  return (
    <div style={{height:712,backgroundImage:"linear-gradient(155.23deg, #040C18 2.74%, rgba(4, 40, 76, 0.934375) 83.3%, rgba(3, 27, 52, 0.9) 98.22%)"}}>
      <img src={pic} alt="" className="imgerr" />
      <h1 className="h1err"> Oh No! </h1>
      <p className="herr"> The Page you are looking for can not be found</p>
      <button className="b1err" onClick={refresh}>Try Again ! </button>
    </div>
  );
};

export default PageNotFound;