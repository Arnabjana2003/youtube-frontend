import React, { useEffect, useState } from 'react'
import likeApi from '../api/likeApi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { likeVideo } from '../store/videoSlice'

function LikeBtn({id,type}) {
  const dispatch = useDispatch()
  const authStatus = useSelector(state=>state.auth.authStatus)
  const navigate = useNavigate()
  const videoDetails = useSelector(state=>state.video.videoDetails)

  const handleClick = ()=>{
    if(!authStatus){
      navigate("/login")
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