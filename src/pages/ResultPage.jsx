import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header';
import UploadBar from '../components/UploadBar';
import VideoCard from '../components/VideoCard';
import Menu from '../components/Menu';

function ResultPage() {
    const videos = useSelector(state=>state.videos.videosList)
    return (
        <div className="mt-3 md:p-3">
          <Header/>
          <UploadBar/>
            <div className="md:grid md:grid-cols-9 lg:grid-cols-12 md:grid-rows-6 lg:grid-rows-9 gap-3 mt-5 pb-28 ">
              {!videos.length && <p>Loading Videos</p>}
            {videos.length && videos.map((video) => (
            <div key={video._id} className="col-span-3 row-span-3 pt-3">
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

export default ResultPage