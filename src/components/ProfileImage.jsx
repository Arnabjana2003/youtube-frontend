import React from 'react'

function ProfileImage({profileImage}) {
  return (
    <div className=" m-1 min-w-9 max-w-9 min-h-9 max-h-9 rounded-full overflow-hidden bg-slate-900">
        {profileImage && <img src={profileImage}/>}
    </div>
  )
}

export default ProfileImage