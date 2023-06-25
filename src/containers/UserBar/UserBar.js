import React from 'react'
import "./UserBar.css"
import crown from "../../assets/crown.png";
import User from "../../assets/user.png";

export default function UserBar() {
  return (
    <div className='userBarContainer'>
      <div className='userInfo'>
        <img className='userImg' src={User}/>
        <h1>Mohamed</h1>
        <p>mohamed95@gmail.com</p>
      </div>
      <div className='learningPoints'> Learning Points
        <div className='points'>
          <img src={crown}/>
          689
        </div>
      </div>
      {/* <div className='courseResult'> Course Results

      </div> */}
      
    </div>
  )
}
