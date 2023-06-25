import React from 'react'
import UserProfileSideBar from '../containers/UserProfileSideBar/UserProfileSideBar'
import SettingsContent from '../containers/SettingsContent/SettingsContent'

export default function Settings() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
        <UserProfileSideBar name="hagora"/>
        <SettingsContent/>
    </div>
  )
}
