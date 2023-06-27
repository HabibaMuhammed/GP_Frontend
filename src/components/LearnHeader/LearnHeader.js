import React from "react";
import learn from "../../assets/learn.png";
import style from "./LearnHeader.module.css";
export default function LabHeader() {
  return (
    <div style={{ display: 'flex', flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
    <img className={style.img} src={learn}/>
      <h1 className={style.h}>Learning Environment</h1>
    </div>
  );
}
