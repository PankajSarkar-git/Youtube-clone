import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);

  const { snippet, statistics } = info;
  const { title, thumbnails, publishedAt, channelTitle } = snippet;
  const { viewCount } = statistics;
  return (
    <div className="mx-4 my-2 p-4 w-80 h-96 border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col">
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <ul className="p-2 flex-1 flex flex-col justify-between">
        <li className="font-bold text-xl py-2 text-gray-800 truncate">
          {title}
        </li>
        <li className="text-gray-600 py-1">{channelTitle}</li>
        <li className="text-gray-600 py-1">{viewCount} Views</li>
        <li className="text-gray-500 text-sm py-1">{publishedAt}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
