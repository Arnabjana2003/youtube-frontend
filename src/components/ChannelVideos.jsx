import React, { useEffect, useState } from "react";
import videosApi from "../api/videosApi";
import { useNavigate } from "react-router-dom";
const Card = ({ width, author, thumbnailUrl, views, title }) => {
  return (
    <div
      className={`${
        !width
          ? "max-[375px]:w-[300px] max-[639px]:w-[360px] sm:w-[320px] md:w-[310px]"
          : width
      } overflow-hidden md:max-h-420px mb-3 md:mx-2 rounded-md mx-auto`}
      onClick={() => navigate(`/video/${author._id}/${_id}`)}
    >
      <div className="w-full h-[180px] sm:h-[220px] overflow-hidden rounded-lg bg-black">
        {thumbnailUrl && <img src={thumbnailUrl} className="w-full h-full" />}
      </div>
      <div>
        <h2>{title || "Video title"}</h2>
        <p>{views || 0} times viewed</p>
      </div>
    </div>
  );
};
function ChannelVideos({ channelId }) {
    const [videos,setVideos] = useState([])
    const navigate = useNavigate()


    useEffect(()=>{
    videosApi.getChannelVideos(channelId)
    .then(res=>{
      setVideos(res.data);
    })
    .catch(err=>console.log(err))
    },[])

    if(videos.length == 0){
      return(
        <div>
          <p>Videos not available</p>
        </div>
      )
    }
  return (
    <div className="md:flex flex-wrap">
      {
        videos.map((data)=>(<div key={data._id} onClick={()=>navigate(`/video/${channelId}/${data._id}`)}>
          <Card author={data.author} thumbnailUrl={data.thumbnailUrl} views={data.views} title={data.title} />
        </div>))
      }
    </div>
  );
}

export default ChannelVideos;
