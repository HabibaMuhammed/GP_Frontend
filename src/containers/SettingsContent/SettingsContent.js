import React from 'react'
import UpdatePassword from '../../components/UpdatePassword/UpdatePassword'
import DeleteAccount from '../../components/DeleteAccount/DeleteAccount'

export default function SettingsContent() {
  return (
    <div className='UserProfileDataContainer'>
    <UpdatePassword/>
    <DeleteAccount/>
</div>  )
}
