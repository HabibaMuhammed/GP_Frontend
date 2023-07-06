import React from "react";
import "./DownloadLab.css";
import download from "../../assets/Download.png";

export default function DownloadLab({ container, formLink }) {
  const downloadFile = () => {
    const link = document.createElement("a");
    const imgbaseUrl = "http://localhost:5001/";
    if (formLink) {
      link.href = formLink;
    } else {
      link.href = `${imgbaseUrl}${container}`;
    }
    link.download = "Lab";
    link.target = "_blank"; // Open in a new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const downloadtime = new Date().toLocaleTimeString();
    localStorage.setItem("downloadTime", downloadtime);
  };
  return (
    <div className="downloadContainer">
      {!formLink && <img src={download} alt="download" className="downloadImg" />}
      { !formLink && <div className="middle">
        <h2 className="downloadTitle">Press button to Download Lab</h2>
        <h2 className="downloadSub">.zip\rar file size no more than 10MB</h2>
      </div>}
      { formLink && <div className="middle">
        <h2 className="downloadTitle">Ready to test you knowledge?</h2>
        <h2 className="downloadSub">Click to access you quiz</h2>
      </div>}
      <button className="downloadBtn" onClick={downloadFile}>
      { formLink && "ACCESS"}
      { !formLink && "DOWNLOAD"}

      </button>
    </div>
  );
}
