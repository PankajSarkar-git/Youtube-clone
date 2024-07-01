import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "./Constants";

const useVideo = () => {
  const [videos, setVideos] = useState({});
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      setVideos(json.items);
    } catch (error) {
      console.log(error);
    }
  };
  return videos;
};

export default useVideo;
