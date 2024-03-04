import React, { useState } from 'react'
import axios from "axios"

function SubscribeBtn({isSubscribed,channelId,updateFunc}) {
  const [subscribed,setSubscribed] = useState(isSubscribed)
  const handleClick = ()=>{
    console.log(channelId)
    axios.post("https://youtubebackend-one.vercel.app/api/v1/subscription/subscribe",{channelId})
    .then(()=>{
      updateFunc()
      setSubscribed(true)
    })
    .catch(err=>{
      alert(err.response.data.error)
    })
  }
  return (
    <div>
        <button onClick={handleClick} className={`px-3 py-1 ${(subscribed || isSubscribed)?"bg-slate-500":"bg-red-600"} rounded-lg font-semibold text-white`}>{(subscribed || isSubscribed)?"Subscribed":"Subscribe"}</button>
    </div>
  )
}

export default SubscribeBtn