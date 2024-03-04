import React, { useState, useEffect } from "react";
import videosApi from "../api/videosApi";
import VideoCard from "../components/VideoCard";
import Menu from "../components/Menu";
import Header from "../components/Header";
import UploadBar from "../components/UploadBar";

function Home() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    videosApi
      .getAllVideos()
      .then((res) => {
        setVideos(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="">
      <Header/>
      <UploadBar/>
        <div className="flex justify-evenly md:justify-between mt-5  flex-wrap  pb-28">
        {videos.map((video) => (
        <div key={video._id}>
          <VideoCard
          _id={video._id}
            title={video.title}
            description={video.description}
            author={video.author}
            thumbnailUrl={video.thumbnailUrl}
            videoUrl = {video.videoUrl}
            subscribers={video.subscriber}
            isSubscribed={video.isSubscribed || false}
            profileImage = {video.author?.profileImage}
            views={video.views}
          />
        </div>
      ))}
        </div>
        <div className="">
            <Menu/>
        </div>
    </div>
  );
}

export default Home;
