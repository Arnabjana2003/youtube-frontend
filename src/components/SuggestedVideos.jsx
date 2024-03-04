import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import videosApi from "../api/videosApi.js"

function SuggestedVideos({channelId}) {
    const [videoLsit,setVideoList] = useState([])
    useEffect(()=>{
      videosApi.getSuggestedVideos(channelId)
      .then((res)=>setVideoList(res.data))
      .catch(err=>console.log(err))
    },[])
  return (
    <div className=' '>
        <p className=' mb-5 ml-3 md:text-lg font-semibold'>Recommaneded vidoes for you</p>
        {videoLsit.map((video) => (
        <div key={video._id} className=' flex justify-center'>
          <VideoCard
          width={"max-[375px]:w-[320px] max-[639px]:w-[360px] sm:w-[320px] md:w-[400px]"}
          _id={video._id}
            title={video.title}
            description={video.description}
            author={video.author}
            thumbnailUrl={video.thumbnailUrl}
            videoUrl = {video.videoUrl}
            subscribers={video.subscriber}
            isSubscribed={video.isSubscribed || false}
          />
        </div>
      ))}
    </div>
  )
}

export default SuggestedVideos