import React from "react";
import invite from "../../assets/invite.png";
import "./Invite.css"
export default function Invite() {
  return (
    <div className="inviteContainer">
      <img className="inviteImg" src={invite} alt="invite" />
      
      <h2 className="inviteTitle"> Invite a friend</h2>
      <button className="inviteBtn">Get The Link</button>
    </div>
  );
}
