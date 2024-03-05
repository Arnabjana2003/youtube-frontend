import React from 'react'
import ViewChannel from './ViewChannel'
import { useSelector } from 'react-redux'

function ProfilePage() {
    const channelId = useSelector(state=>state.auth.authDetails?._id)
  return (
    <div className=''>
        <ViewChannel id={channelId}/>
    </div>
  )
}

export default ProfilePage