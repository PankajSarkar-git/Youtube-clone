import React from "react";
import { HiHome } from "react-icons/hi";
import { BiLogoVimeo, BiSolidVideos, BiVideo } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return if menu is closed
  if (!isMenuOpen) {
    return (
      <div className="p-5 h-full shadow-lg w-20 border border-black bg-white">
        <ul>
          <li>
            <Link to={"/"}>
              <HiHome className="text-4xl mr-2" /> Home
            </Link>
          </li>
          <li>
            <Link to={"/short"}>
              <BiSolidVideos className="text-4xl mr-2" />
              Shorts{" "}
            </Link>
          </li>
          <li>
            <Link to={"/live"}>
              <BiVideo className="text-4xl mr-2" /> Video
            </Link>
          </li>
          <li>
            <Link to={"/live"}>
              <BiLogoVimeo className="text-4xl mr-2" /> Live
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  // Render when menu is open
  return (
    <div className="p-5 shadow-lg h-full w-full md:w-60 border border-black bg-white ">
      <ul className="w-full md:w-60">
        <li className="flex">
          <Link to="/" className="flex items-center">
            <HiHome className="text-xl md:text-2xl mt-1 mr-5" />
            <span className="hidden md:inline">Home</span>
          </Link>
        </li>
        <li className="flex mt-2">
          <Link to="/short" className="flex items-center">
            <BiSolidVideos className="text-xl md:text-2xl mt-1 mr-5" />
            <span className="hidden md:inline">Shorts</span>
          </Link>
        </li>
        <li className="flex mt-2">
          <Link to="/video" className="flex items-center">
            <BiVideo className="text-xl md:text-2xl mt-1 mr-5" />
            <span className="hidden md:inline">Video</span>
          </Link>
        </li>
        <li className="flex mt-2">
          <Link to="/live" className="flex items-center">
            <BiLogoVimeo className="text-xl md:text-2xl mt-1 mr-5" />
            <span className="hidden md:inline">Lives</span>
          </Link>
        </li>
      </ul>
      <div className="mt-5">
        <h1 className="font-bold text-lg">Subscriptions</h1>
        <ul className="text-base md:text-lg mt-2">
          <li>Music</li>
          <li>Gaming</li>
          <li>Sports</li>
          <li>Movies</li>
        </ul>
      </div>
      <div className="mt-5">
        <h1 className="font-bold text-lg">Watch later</h1>
        <ul className="text-base md:text-lg mt-2">
          <li>Music</li>
          <li>Gaming</li>
          <li>Sports</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
