import React from 'react'
import PlayVideo from "../components/PlayVideo.jsx"
import SuggestedVideos from '../components/SuggestedVideos.jsx'
import { useParams } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Menu from '../components/Menu.jsx'
import UploadBar from '../components/UploadBar.jsx'

function VideoPlayerPage() {
  const {channelId,videoId} = useParams()
  return (
    <div>
      <Header/>
      <UploadBar/>
      <div className='md:flex justify-around'>
        <PlayVideo videoId={videoId}/>
        <div className='md:ml-10 flex justify-center'>
        <SuggestedVideos channelId={channelId}/>
        </div>
    </div>
    <Menu/>
    </div>
  )
}

export default VideoPlayerPage