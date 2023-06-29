import React from "react";
import sql from "../../assets/sqlinjection.png";
import style from "./LabHeader.module.css"
export default function LabHeader({name}) {
  return (
    <div style={{ display: 'flex', flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
    <img className={style.img} src={sql}/>
      <h1 className={style.h}>{name.toUpperCase()}</h1>
    </div>
  );
}
