import React, { useEffect, useRef, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { AiFillYoutube, AiOutlineSearch } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/Constants";
import { cacheResults } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQueary] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(searchQuery);
    const timer = setTimeout(() => {
      // cache chake
      if (searchCache[searchQuery]) {
        // cache data
        setSearchSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
      const json = await data.json();
      setSearchSuggestion(json[1]);
      console.log(json[1]);
      // update cach data
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const toggleMenuHandeler = () => {
    dispatch(toggleMenu());
  };

  const searchVideo = (e) => {
    setSearchQueary(e.target.value);
    getSearchVideo();
  };

  const getSearchVideo = async () => {
    navigate(`/results?v=${searchQuery}`);
    setSearchQueary(searchQuery);
  };

  const navigateResult = (suggestion) => {
    setSearchQueary(suggestion);
    navigate(`/results?v=${suggestion}`);
    console.log("navigate", suggestion);
    setShowSuggestion(false);
  };

  const unitRef = useRef();
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          if (!showSuggestion) {
            setShowSuggestion(false);
          }
        }
      }
      // Bind the event listener
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("click", handleClickOutside, true);
      };
    }, [ref]);
  };
  useOutsideAlerter(unitRef);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 px-2 shadow-md items-center h-20 w-full">
      <div className="flex col-span-4 md:col-span-4">
        <div
          className="p-1 hover:bg-gray-200 hover:rounded-[50%] mr-4 cursor-pointer"
          onClick={() => toggleMenuHandeler()}
        >
          <HiBars3 className="text-2xl md:text-4xl" />
        </div>

        <Link to="/" className="flex p-1">
          <AiFillYoutube className="text-2xl md:text-4xl text-red-700" />
          <h1 className="text-lg md:text-xl pt-1 font-bold">
            YouTube <sup className="font-normal">IN</sup>
          </h1>
        </Link>
      </div>
      <div className="col-span-7 md:col-span-7 px-2 md:px-10 relative">
        <div className="w-fit" ref={unitRef}>
          <div className="flex w-full">
            <input
              type="text"
              className="w-full md:w-full h-10 rounded-l-full p-2 px-3 border border-r-0 text-sm md:text-2xl outline-none border-gray-500"
              onChange={(e) => setSearchQueary(e.target.value)}
              value={searchQuery}
              onFocus={() => setShowSuggestion(true)}
              // onBlur={() => setShowSuggestion(false)}
            />
            <button
              onClick={searchVideo}
              className="border py-2 px-4 md:px-6 outline-none rounded-r-full text-sm md:text-xl h-10 border-gray-500 bg-gray-100"
            >
              <AiOutlineSearch />
            </button>
          </div>
          {showSuggestion && (
            <div>
              {searchSuggestion.length !== 0 && (
                <div className="bg-white w-full md:w-[53%] flex text-sm md:text-xl p-2 absolute shadow-md rounded-lg z-10">
                  <ul className="w-full border-l border-r">
                    {searchSuggestion.map((suggestion) => (
                      <div key={suggestion}>
                        <li
                          className="border-t p-1 hover:bg-gray-300 flex cursor-pointer z-50"
                          onClick={() => navigateResult(suggestion)}
                        >
                          <AiOutlineSearch className="mr-3 mt-2" />
                          {suggestion}
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="col-span-1 md:col-span-1 text-sm md:text-2xl">
        <FaUserAlt />
      </div>
    </div>
  );
};

export default Header;
