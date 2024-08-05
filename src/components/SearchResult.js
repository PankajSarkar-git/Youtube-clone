import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY, SEARCH_API } from "../utils/Constants";
import SearchResultVideoCardComponent from "./SearchResultVideoCardComponent";

const SearchResult = () => {
  const [suggestionParam] = useSearchParams();
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    getSearchResults();
  }, [suggestionParam]);

  const getSearchResults = async () => {
    try {
      const data = await fetch(
        `${SEARCH_API}${suggestionParam.get("v")}&key=${GOOGLE_API_KEY}`
      );
      const json = await data.json();
      console.log(json, "dataaaa");
      setApiData(json?.items);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="overflow-y-scroll h-screen no-scrollbar">
      {apiData &&
        apiData.map((video) => (
          <Link
            to={`/watch?v=${video.id.videoId}`}
            key={video.id.videoId}
            className="m-2"
          >
            <SearchResultVideoCardComponent video={video} />
          </Link>
        ))}
    </div>
  );
};

export default SearchResult;
