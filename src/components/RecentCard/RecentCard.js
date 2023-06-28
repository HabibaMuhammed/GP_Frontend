import React from 'react'
import xss from "../../assets/xss.png";
import "./RecentCard.css"
export default function RecentCard({img,name}) {
  return (
    <div className='RecentCardContainer'>
        <img src={xss} className="RecentCardImg" />
        <h3 className='RecentCardFont'>{name}</h3>
    </div>
  )
}
