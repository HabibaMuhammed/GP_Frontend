import React from 'react'
import xss from "../../assets/xss.png";
import "./RecentCard.css"
export default function RecentCard() {
  return (
    <div className='RecentCardContainer'>
        <img src={xss} className="RecentCardImg" />
        <h3 className='RecentCardFont'>XSS Lab</h3>
    </div>
  )
}
