import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import VideInfo from "./VideInfo";
import { VIDEO_INFO_API, GOOGLE_API_KEY } from "../utils/Constants";
import loading from "../Loading/Infinity-1s-200px.gif";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoInfo, setVideoInfo] = useState({});
  //   console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideoInfo();
  }, []);
  const getVideoInfo = async () => {
    try {
      const data = await fetch(
        VIDEO_INFO_API + searchParams.get("v") + "&key=" + GOOGLE_API_KEY
      );
      const json = await data.json();
      setVideoInfo(json.items);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(videoInfo.length, "videoInfo.length");
  if (!videoInfo.length) {
    return (
      <div className="w-full flex h-screen items-center justify-center">
        <img src={loading} alt="loading..." />
      </div>
    );
  }
  return (
    <div className="flex flex-col mt-5  px-4 md:px-8  w-full items-start justify-start">
      <div className="flex w-full  gap-3">
        <div className="w-full flex justify-center">
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="max-w-screen-lg"
          ></iframe>
        </div>
        <div className="w-96">

          <LiveChat />
        </div>
      </div>
      {videoInfo.length > 0 && 
      <div className="flex justify-start">
      <VideInfo videoInfo={videoInfo[0]} />
      </div>
      }
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
