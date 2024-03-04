import React, { useEffect, useState } from "react";
import ProfileImage from "./ProfileImage";
import SubscribeBtn from "./SubscribeBtn";
import LikeBtn from "./LikeBtn";
import DislikeBtn from "./DislikeBtn";
import ShareBtn from "./ShareBtn";
import videosApi from "../api/videosApi";
import { useDispatch, useSelector } from "react-redux";
import { videoDetails } from "../store/videoSlice";
import { useNavigate } from "react-router-dom";

function PlayVideo({videoId}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading,setLoading] = useState(true)
  const [videoData,setVideoData] = useState({})
  const [viewDes,SetViewDes] = useState(false)
  const [subscriberCount,setSubscriberCount] = useState(0)
  const [videoUrl,setVideoUrl] = useState()


  useEffect(()=>{
    console.log("PlayVideo com rerendered");
    videosApi.playVideo(videoId)
    .then((res)=>{
      setVideoData(res.data)
      setVideoUrl(res.data.videoUrl)
      setSubscriberCount(res.data.subscribers)
      dispatch(videoDetails(res.data))
      console.log(res.data.videoUrl);
    })
    .catch((err)=>{
      console.log(err)
      dispatch(videoDetails({}))
    })
    .finally(()=>{
      setLoading(false)
    })
  },[videoId,videoUrl])

  if(loading) return (<div className="w-[767px] lg:max-w-3xl md:p-3 overflow-hidden">
    <div className="min-w-screen min-h-[180px] sm:min-h-[240px] md:min-h-[306px] bg-black md:rounded-lg">a</div>
  </div>)

  return (
    <div className="">
      <div className="">
       {
        videoUrl &&  <video onClick={()=>console.log(videoUrl)}  className="w-full md:rounded-lg" controls>
        <source
          src={videoUrl}
          type="video/mp4"
        ></source>
        Your browser does not support the video tag.
      </video>
       }
      </div>
      <h2 className=" font-bold text-lg sm:text-xl md:text-2xl text-slate-800">
       {videoData?.title || "Video title"} 
      </h2>
      <div className="mt-4 flex justify-between items-center">
        <div className=" flex items-start" onClick={()=>{
          videoData.author && navigate(`/video/${videoData?.author?._id}`)
        }}>
          <ProfileImage profileImage={videoData?.author?.profileImage} />
          <div className=" ml-2">
            <h4 className=" font-bold text-md  md:text-lg text-slate-800">
              {videoData?.author?.userName || "Author name"}
            </h4>
            <p className=" text-sm ">{subscriberCount} subscribers</p>
          </div>
        </div>
        <div className="mr-2">
          <SubscribeBtn isSubscribed={videoData?.isSubscribed || false} channelId={videoData?.author?._id} updateFunc={()=>setSubscriberCount(prev=>++prev)}/>
        </div>
      </div>
      <div className="flex justify-around mt-3">
        <LikeBtn likeCount={videoData?.likes} isLiked={videoData?.isLiked} id={videoId} type="video" />
        <DislikeBtn/>
        <ShareBtn/>
      </div>
      <div className=" mt-5 p-3 bg-slate-200 rounded-lg " onClick={()=>SetViewDes(prev=>!prev)}>
        <p>Description:</p>
        <p className={`mt-2 px-2 ${!viewDes?"text-ellipsis overflow-hidden line-clamp-2":null} text-sm opacity-80`}>{videoData?.description}</p>
      </div>
    </div>
  );
}

export default PlayVideo;
