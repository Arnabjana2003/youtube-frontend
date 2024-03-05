import React, { useEffect, useState } from "react";
import { useAsyncError, useParams } from "react-router-dom";
import SubscribeBtn from "../components/SubscribeBtn";
import ChannelVideos from "../components/ChannelVideos";
import userApi from "../api/userApi";
import Header from "../components/Header";
import UploadBar from "../components/UploadBar";
import { useSelector } from "react-redux";
import VideosHistory from "../components/VideosHistory";
import Menu from "../components/Menu";
import Logout from "../components/Logout";

function ViewChannel({id}) {
  const chnId = useParams().channelId
  const [isAdmin,setIsAdmin] = useState(false)
  const [channel, setChannel] = useState({});
  const [loading,setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("Home")
  const [subscriberCount,setSubscriberCount] = useState(0)
  const currentUserId = useSelector(state=>state.auth.authDetails?._id)
  const tabs = ["Home","Videos","History"]
  
  useEffect(()=>{
    const channelId = id?id:chnId
    if(currentUserId === channelId) setIsAdmin(true)
    userApi.getChannelInfo(channelId)
    .then((res)=>{
      setChannel(res.data)
      setSubscriberCount(res.data.subscribers)
    })
    .catch(err=>console.log(err))
    .finally(()=>setLoading(false))
  },[])
  return (
    <div className="p-3 mt-10">
      <Header/>
      <UploadBar/>
      <div className="mt-3 flex gap-3 items-center">
        <div className=" w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-black rounded-full overflow-hidden">
          <img src={channel?.profileImage} alt="channel image" className="w-full h-full" />
        </div>
        <div className="">
          <h1 className="text-xl font-bold">
            {channel.userName || "channel name"}
          </h1>
          <p className="text-sm text-slate-500">
            <span>{subscriberCount} subscribers</span>
            <span className="ml-3">{channel.videos || 0} videos</span>
          </p>
          {!isAdmin && <div className="mt-2">
            <SubscribeBtn isSubscribed={channel.isSubscribed || false} updateFunc={()=>setSubscriberCount(prev=>++prev)} channelId={channel?._id}/>
          </div>}
          {isAdmin && <div className="mt-1 px-2 py-1 font-semibold rounded-md bg-red-500 inline-block text-white">
            <Logout/>
            </div>}
        </div>
      </div>

      <div className="mt-8 flex gap-4 border-b-2 pb-2 font-semibold">
        {tabs.map((tab,index)=>(<p 
        key={index} 
        className={`${activeTab === tab?"border-b-2":null} border-slate-700`}
        onClick={()=>{
            setActiveTab(tab)
        }}
        >{tab}</p>))}
      </div>

      {
        !loading && activeTab === "Videos" &&
        <div className="mt-3">
          <ChannelVideos channelId={channel?._id}/>
        </div>
      }
      {
        !loading && activeTab === "History" &&
        <div className="mt-3">
          <VideosHistory/>
        </div>
      }
      <div>
        <Menu/>
      </div>
    </div>
  );
}

export default ViewChannel;
