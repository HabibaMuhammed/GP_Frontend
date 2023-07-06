import React from 'react'
import "./RecentCard.css"
export default function RecentCard({img,name}) {
  return (
    <div className='RecentCardContainer'>
        <img src={img} className="RecentCardImg" />
        <h3 className='RecentCardFont'>{name}</h3>
    </div>
  )
}
