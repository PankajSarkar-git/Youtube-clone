import React, { useEffect ,useState} from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import VideInfo from "./VideInfo";
import { VIDEO_INFO_API, GOOGLE_API_KEY } from '../utils/Constants'
import loading from '../Loading/Infinity-1s-200px.gif'

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoInfo , setVideoInfo] = useState({})
  //   console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideoInfo()
  },[]);
  const getVideoInfo = async () => {
    const data = await fetch(VIDEO_INFO_API + searchParams.get("v")+"&key=" + GOOGLE_API_KEY);
    const json = await data.json();
    setVideoInfo(json.items)
  }
  // console.log(videoInfo.length);
  if (!videoInfo.length) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <img src={loading} alt="loading..." />
      </div>
    )
  }
  return (
    <div className=" flex flex-col mt-5">
      <div>
        <iframe
          width="1000"
          height="500"
          src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      {videoInfo.length && <VideInfo videoInfo={videoInfo[0]}/>}
      <CommentsContainer/>
    </div>
  );
};

export default WatchPage;
