import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMenu } from '../utils/appSlice'


const VideoContainer = () => {
  const [videos, setVideos] = useState({});
  const dispatch = useDispatch()

  useEffect(() => {
    getVideos();
    dispatch(openMenu())
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  };

  // console.log(videos.length);
  if (!videos.length) {
    return <h1>Loading......</h1>;
  }
  return (
    <div className="flex flex-wrap justify-around">
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`} key={video.id}>
        <VideoCard info={video}  />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
