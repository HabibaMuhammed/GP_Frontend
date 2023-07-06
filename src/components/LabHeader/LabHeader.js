import React from "react";
import style from "./LabHeader.module.css"
export default function LabHeader({name,img}) {
  return (
    <div style={{ display: 'flex', flexDirection:'row',justifyContent:'flex-start',alignItems:'center', marginLeft:'40px'}}>
    <img className={style.img} src={img} alt="vuln" />
      <h1 className={style.h}>{name.toUpperCase()}</h1>
    </div>
  );
}
