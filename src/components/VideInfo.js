import { useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoMdShareAlt, IoIosMore } from "react-icons/io";
import { GiSaveArrow } from "react-icons/gi";

const VideInfo = ({ videoInfo }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const { snippet, statistics } = videoInfo;
  const { title, publishedAt, description, channelTitle } = snippet;
  const { likeCount, viewCount } = statistics;

  // Toggle description view
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="w-full md:w-[1000px] mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="font-bold text-xl py-2">{title}</h2>
      <div className="flex items-center justify-between py-3 mt-3 text-lg">
        <div className="flex items-center gap-2">
          <BiSolidUserCircle className="text-4xl" />
          <p className="font-bold">{channelTitle}</p>
          <button className="rounded-full bg-black px-4 py-2 text-white hover:bg-gray-800 transition-colors duration-300">
            Subscribe
          </button>
        </div>
        <div className="flex gap-3">
          <div className="flex">
            <button className="bg-gray-100 rounded-l-full px-5 py-2 hover:bg-gray-200 transition-colors duration-300">
              <AiOutlineLike className="inline" />{" "}
              {Math.round(likeCount / 1000)}K
            </button>
            <button className="bg-gray-100 rounded-r-full px-5 py-2 hover:bg-gray-200 transition-colors duration-300">
              <AiOutlineDislike className="inline" />
            </button>
          </div>
          <button className="bg-gray-100 rounded-full px-5 py-2 hover:bg-gray-200 transition-colors duration-300">
            <IoMdShareAlt className="inline" /> Share
          </button>
          <button className="bg-gray-100 rounded-full px-5 py-2 hover:bg-gray-200 transition-colors duration-300">
            <GiSaveArrow className="inline" /> Download
          </button>
          <button className="bg-gray-100 rounded-full px-5 py-2 hover:bg-gray-200 transition-colors duration-300">
            <IoIosMore className="inline" />
          </button>
        </div>
      </div>
      <div className="mt-3">
        <div className="bg-gray-300 text-lg p-4 rounded-lg">
          <p className="text-gray-700">
            {showFullDescription
              ? description
              : description.slice(0, 100) + "..."}
          </p>
          <button
            onClick={toggleDescription}
            className="text-blue-500 hover:underline mt-2"
          >
            {showFullDescription ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideInfo;
