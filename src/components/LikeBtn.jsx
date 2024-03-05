import React from 'react'
import likeApi from '../api/likeApi'
import { useDispatch, useSelector } from 'react-redux'
import { likeVideo } from '../store/playedVideoSlice'

function LikeBtn({id,type="video"}) {
  const dispatch = useDispatch()
  const authStatus = useSelector(state=>state.auth.authStatus)
  const videoDetails = useSelector(state=>state.playedVideo.videoDetails)

  const handleClick = ()=>{
    if(!authStatus){
      alert("Login to like videos")
      return 
    }
    if(type == "video"){
      likeApi.likeVideo(id)
      .then(()=>{
        dispatch(likeVideo())
      })
      .catch(err=>alert(err.response.data.error))
    }
  }
  return (
    <div>
        <button className={`px-3 py-1 ${videoDetails.isLiked?"bg-blue-400":"bg-slate-300"} hover:bg-blue-300 rounded-xl`} onClick={handleClick}>{videoDetails.likes} likes</button>
    </div>
  )
}

export default LikeBtn