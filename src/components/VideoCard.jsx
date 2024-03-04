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
  width
}) {
  const navigate = useNavigate();
  return (
    <div
      className={`${!width?("max-[375px]:w-[320px] max-[639px]:w-[360px] sm:w-[320px] md:w-[310px]"):width} overflow-hidden md:max-h-420px mb-3 md:mx-2 rounded-md`}
      onClick={() => navigate(`/video/${author?._id}/${_id}`)}
    >
      <div className="w-full h-[200px] sm:h-[220px] overflow-hidden rounded-lg bg-black">
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
