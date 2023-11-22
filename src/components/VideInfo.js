import { BiSolidUserCircle } from "react-icons/bi";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoMdShareAlt, IoIosMore } from "react-icons/io";
import { GiSaveArrow } from "react-icons/gi";

const VideInfo = ({ videoInfo }) => {
  // console.log(videoInfo);
  const { snippet, statistics } = videoInfo;
  const { title, publishedAt, description, channelTitle } = snippet;
  const { likeCount, viewCount } = statistics;

  return (
    <div className="w-[1000px] p-3">
      <h2 className="font-bold text-xl py-2">{title}</h2>
      <div className="flex items-center gap-2 py-3 mt-3 text-lg justify-between">
        <div className="flex items-center gap-2  text-lg">
          <BiSolidUserCircle className="text-4xl" />
          <p className=" font-bold">{channelTitle}</p>
          <button className="rounded-full bg-black px-4 py-2  text-white">
            Subscribe
          </button>
        </div>
        <div className="text-lg flex gap-3 ">
          <div className="flex ">
            <button className="bg-gray-100 rounded-l-full px-5 hover:bg-gray-400  py-2">
              <AiOutlineLike className="inline" />{" "}
              {Math.round(likeCount / 1000)}K
            </button>
            <button className="bg-gray-100 rounded-r-full px-5 hover:bg-gray-400  py-2">
              <AiOutlineDislike />
            </button>
          </div>
          <div className=" ">
            <button className="bg-gray-100 rounded-full px-5 hover:bg-gray-400  py-2">
              <IoMdShareAlt className="inline" /> Share
            </button>
          </div>
          <div className=" ">
            <button className="bg-gray-100 rounded-full px-5 hover:bg-gray-400  py-2">
              <GiSaveArrow className="inline" /> Download
            </button>
          </div>
          <div className=" ">
            <button className="bg-gray-100 rounded-full px-5 hover:bg-gray-400  py-2">
              <IoIosMore className="inline" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="bg-gray-300 text-lg p-2">
          <span className="mr-5">{viewCount}</span>
          <span className="mx-5">{publishedAt}</span>
          <span className="">{title}</span>
          <p className="mt-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideInfo;
