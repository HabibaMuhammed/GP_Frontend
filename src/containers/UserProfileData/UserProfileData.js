import React from 'react'
import PersonalInfo from '../../components/PersonalInfo/PersonalInfo'
import RecentChallenges from '../../components/RecentChallenges/RecentChallenges'
import "./UserProfileData.css"
import UserProfilePerformance from '../UserProfilePerformance/UserProfilePerformance'
export default function UserProfileData() {
  return (
    <div className='UserProfileDataContainer'>
        <PersonalInfo/>
        <RecentChallenges/>
        <UserProfilePerformance/>
    </div>
  )
}
