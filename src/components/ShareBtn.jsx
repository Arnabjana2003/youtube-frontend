import React from 'react'
import {useSelector} from "react-redux"

function ShareBtn() {
  const videoTitle = useSelector(state=>state.playedVideo.videoDetails.title)
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: videoTitle,
          url: window.location.href,
        });
        console.log('Sharing succeeded');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Web Share API not supported');
    }
  }
  return (
    <div>
        <button onClick={handleShare} className='hover:bg-blue-300 px-3 py-1 bg-slate-300 rounded-xl'>Share</button>
    </div>
  )
}

export default ShareBtn