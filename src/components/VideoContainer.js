import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";
import useVideo from "../utils/useVideo";
import loading from "../Loading/Infinity-1s-200px.gif";

const VideoContainer = () => {
  const videos = useVideo();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openMenu());
  }, []);

  // console.log(videos.length);
  if (!videos.length) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <img src={loading} alt="loading..." />
      </div>
    );
  }
  return (
    <div className="flex flex-wrap justify-around p-4">
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`} key={video.id} className="m-2">
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
