import React from "react";
import "./DownloadLab.css";
import download from "../../assets/Download.png";

export default function DownloadLab() {
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "http://localhost:5001/Container/sqlinjection.rar";
    link.download = "Lab";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
   
    var downloadtime =new Date().toLocaleTimeString();
    localStorage.setItem("downloadTime", downloadtime);
  };
  return (
    <div className="downloadContainer">
      <img src={download} alt="download" className="downloadImg" />
      <div className="middle">
        <h2 className="downloadTitle">Press button to Download Lab</h2>
        <h2 className="downloadSub">.zip\rar file size no more than 10MB</h2>
      </div>
      <button className="downloadBtn" onClick={downloadFile}>
        DOWNLOAD
      </button>
    </div>
  );
}
