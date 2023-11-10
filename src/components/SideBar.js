import React from "react";
import { HiHome } from "react-icons/hi2";
import { BiLogoVimeo, BiSolidVideos, BiVideo } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SIdeBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);



  // Eacrly return 
  if (!isMenuOpen) {
    return (
      <div className="p-5 h-fit shadow-lg w-20">
        <ul>
          <li>
          <Link to={"/"}>
            <HiHome className="text-4xl mr-2" /> Home</Link>
          </li>
          <li>
          <Link to={"/short"}>
            <BiSolidVideos className="text-4xl mr-2" />Shorts </Link>
          </li>
          <li>
          <Link to={"/live"}>
            <BiVideo className="text-4xl mr-2" /> Video</Link>
          </li>
          <li>
          <Link to={"/live"}>
            <BiLogoVimeo className="text-4xl mr-2" /> Live</Link>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div className="p-5 shadow-lg w-64 border border-black  h-fit text-2xl">
      <ul className="w-64">
        <li className="flex">
        <Link to={"/"} className="flex">
          <HiHome className="text-2xl mt-1 mr-5" /> Home
        </Link>
        </li>
        <li className="flex">
        <Link to={"/short"} className="flex">
          <BiSolidVideos className="text-2xl mt-1 mr-5" /> Shorts
        </Link>
        </li>
        <li className="flex">
        <Link to={"/video"} className="flex">
          <BiVideo className="text-2xl mt-1 mr-5" /> Video
        </Link>
        </li>
        <li className="flex">
        <Link to={"/live"} className="flex">
          <BiLogoVimeo className="text-2xl mt-1 mr-5" /> Lives
        </Link>
        </li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Gaming</li>
        <li>Sports</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SIdeBar;
