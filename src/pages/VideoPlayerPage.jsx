import React, { useEffect } from 'react'
import PlayVideo from "../components/PlayVideo.jsx"
import SuggestedVideos from '../components/SuggestedVideos.jsx'
import { useParams } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Menu from '../components/Menu.jsx'
import UploadBar from '../components/UploadBar.jsx'

function VideoPlayerPage() {
  const {channelId,videoId} = useParams()
  // useEffect(()=>{},[channelId,videoId])
  return (
    <div>
      <Header/>
      <UploadBar/>
      <div className='md:grid grid-cols-12 gap-10'>
        <div className='col-span-7 lg:col-span-8 md:p-3'>
        <PlayVideo videoId={videoId}/>
        </div>
        <div className='col-span-5 lg:col-span-4 md:p-3'>
        <SuggestedVideos channelId={channelId}/>
        </div>
    </div>
    <Menu/>
    </div>
  )
}

export default VideoPlayerPage