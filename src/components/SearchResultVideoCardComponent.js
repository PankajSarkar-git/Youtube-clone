import React from "react";

const SearchResultVideoCardComponent = ({ video }) => {
  return (
    <div className="max-w-full mx-4 my-4 bg-white rounded-xl shadow-sm overflow-hidden md:max-w-full transition-transform transform hover:shadow-lg">
      <div className="flex">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-96"
            src={video?.snippet?.thumbnails?.high.url}
            alt={video?.snippet.title}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {video?.snippet.title}
          </h3>
          {/* <div className="flex items-center text-sm text-gray-500 mt-2">
            <span>46K views</span>
            <span className="mx-1">•</span>
            <span>6 days ago</span>
          </div> */}
          <div className="flex items-center mt-4">
            {/* <img
              className="h-8 w-8 rounded-full border-2 border-gray-300"
              src="/path-to-channel-logo.jpg"
              alt="Channel Logo"
            /> */}
            <div className="ml-2">
              <p className="text-sm font-medium text-gray-900 leading-none">
                {video?.snippet?.channelTitle}
              </p>
              <div className="flex space-x-2 mt-1">
                <span className="text-xs text-gray-800 px-2 py-1">
                  {video?.snippet?.description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultVideoCardComponent;
