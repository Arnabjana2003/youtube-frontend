import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import videosApi from "../api/videosApi.js"

function SuggestedVideos({channelId}) {
    const [videoList,setVideoList] = useState([])
    useEffect(()=>{
      videosApi.getSuggestedVideos(channelId)
      .then((res)=>{
        setVideoList(res.data)
      })
      .catch(err=>console.log(err)) //TODO
    },[])
  return (
    <div className=''>
        <p className=' mb-5 ml-3 md:text-lg font-semibold'>Recommaneded vidoes for you</p>
        {videoList.map((video) => (
        <div key={video._id} className=' flex justify-center' onClick={()=>setTimeout(()=>{
        },2000)}>
          <VideoCard
          _id={video._id}
            title={video.title}
            description={video.description}
            author={video.author}
            thumbnailUrl={video.thumbnailUrl}
            videoUrl = {video.videoUrl}
            subscribers={video.subscriber}
            isSubscribed={video.isSubscribed || false}
            profileImage={video.author.profileImage}
          />
        </div>
      ))}
    </div>
  )
}

export default SuggestedVideos