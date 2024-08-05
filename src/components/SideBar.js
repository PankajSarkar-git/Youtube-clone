import React from "react";
import { HiHome } from "react-icons/hi";
import {
  BiLogoVimeo,
  BiSolidVideos,
  BiVideo,
  BiHistory,
  BiMoviePlay,
  BiBookmark,
  BiLike,
} from "react-icons/bi";
import { MdOutlineVideoLibrary, MdOutlineWatchLater } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) {
    return (
      <div className="p-5 h-full shadow-lg w-20 border border-black bg-white">
        <ul>
          <li className="py-3">
            <Link to={"/"}>
              <HiHome className="text-4xl mr-2 " />
            </Link>
          </li>
          <li className="py-3">
            <Link to={"/"}>
              <BiSolidVideos className="text-4xl mr-2" />
            </Link>
          </li>
          <li className="py-3">
            <Link to={"/"}>
              <BiVideo className="text-4xl mr-2" />
            </Link>
          </li>
          <li className="py-3">
            <Link to={"/"}>
              <BiLogoVimeo className="text-4xl mr-2" />
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="p-5 shadow-lg h-full w-full md:w-60 border border-black bg-white no-scrollbar">
      <ul className="w-full md:w-60">
        <li className="flex">
          <Link to="/" className="flex items-center">
            <HiHome className="text-xl md:text-2xl mt-1 mr-5" />
            <span className="hidden md:inline">Home</span>
          </Link>
        </li>
        <li className="flex mt-2">
          <Link to="/" className="flex items-center">
            <BiSolidVideos className="text-xl md:text-2xl mt-1 mr-5" />
            <span className="hidden md:inline">Shorts</span>
          </Link>
        </li>
        <li className="flex mt-2">
          <Link to="/" className="flex items-center">
            <BiVideo className="text-xl md:text-2xl mt-1 mr-5" />
            <span className="hidden md:inline">Videos</span>
          </Link>
        </li>
        <li className="flex mt-2">
          <Link to="/" className="flex items-center">
            <BiLogoVimeo className="text-xl md:text-2xl mt-1 mr-5" />
            <span className="hidden md:inline">Live</span>
          </Link>
        </li>
      </ul>
      <div className="mt-5">
        <h1 className="font-bold text-lg">You</h1>
        <ul className="text-base md:text-lg mt-2">
          <li className="flex mt-2">
            <Link to="/" className="flex items-center">
              <MdOutlineVideoLibrary className="text-xl md:text-2xl mt-1 mr-5" />
              <span className="hidden md:inline">Your channel</span>
            </Link>
          </li>
          <li className="flex mt-2">
            <Link to="/" className="flex items-center">
              <BiHistory className="text-xl md:text-2xl mt-1 mr-5" />
              <span className="hidden md:inline">History</span>
            </Link>
          </li>
          <li className="flex mt-2">
            <Link to="/" className="flex items-center">
              <BiBookmark className="text-xl md:text-2xl mt-1 mr-5" />
              <span className="hidden md:inline">Playlists</span>
            </Link>
          </li>
          <li className="flex mt-2">
            <Link to="/" className="flex items-center">
              <MdOutlineVideoLibrary className="text-xl md:text-2xl mt-1 mr-5" />
              <span className="hidden md:inline">Your videos</span>
            </Link>
          </li>
          <li className="flex mt-2">
            <Link to="/" className="flex items-center">
              <BiMoviePlay className="text-xl md:text-2xl mt-1 mr-5" />
              <span className="hidden md:inline">Your movies</span>
            </Link>
          </li>
          <li className="flex mt-2">
            <Link to="/" className="flex items-center">
              <MdOutlineWatchLater className="text-xl md:text-2xl mt-1 mr-5" />
              <span className="hidden md:inline">Watch later</span>
            </Link>
          </li>
          <li className="flex mt-2">
            <Link to="/" className="flex items-center">
              <BiLike className="text-xl md:text-2xl mt-1 mr-5" />
              <span className="hidden md:inline">Liked videos</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
