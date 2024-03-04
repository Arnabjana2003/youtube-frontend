import React from "react";
import ProfileImage from "./ProfileImage";
import { Link, useNavigate } from "react-router-dom";

function VideoCard({
  _id,
  author,
  views,
  description,
  subscribers,
  thumbnailUrl,
  title,
  videoUrl,
  profileImage,
}) {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-full"
      onClick={() => {
        navigate(`/video/${author?._id}/${_id}`)
      }}
    >
      <div className="w-full h-2/3 overflow-hidden md:rounded-lg bg-black">
        {thumbnailUrl && <img src={thumbnailUrl} className="w-full h-full" />}
      </div>
      <div className="flex p-1">
        <ProfileImage profileImage={profileImage} />
        <div className="m-1 truncate">
          <h1 className=" truncate font-semibold">{title}</h1>
          <p className=" truncate text-[12px] md:text-sm opacity-70">
            {description}
          </p>
          <div className="text-sm mt-1 flex justify-between opacity-80">
            <p>{author?.userName}</p>
            <p>{views||0} times viewed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
