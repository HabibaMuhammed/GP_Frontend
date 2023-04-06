import React from "react";
import sql from "../../assets/sqlinjection.png";
import style from "./LabHeader.module.css"
export default function LabHeader() {
  return (
    
    <div style={{ display: 'flex', flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
    <img className={style.img} src={sql}/>
      <h1 className={style.h}>SQL injection</h1>
    </div>
  );
}
