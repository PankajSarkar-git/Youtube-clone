import React from "react";
import { HiBars3 } from "react-icons/hi2";
import { AiFillYoutube ,AiOutlineSearch} from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {

  const dispatch = useDispatch();

const toggleMenuHandeler = () => {
  dispatch(toggleMenu())
}


  return (
    <div className="grid grid-flow-col px-2 shadow-lg items-center h-20">
      <div className="flex col-span-4">
        <div className=" p-1  hover:bg-gray-200 hover:rounded-[50%] mr-4 cursor-pointer" onClick={() => toggleMenuHandeler()}>
          <HiBars3 className="text-4xl" />
        </div>
        
        <a href="/" className=" flex p-1 ">
          <AiFillYoutube className="text-4xl   text-red-700" />
          <h1 className="text-xl pt-1 font-bold">YouTube <sup className="font-normal">IN</sup></h1>
          
        </a>
      </div>
      <div className="col-span-7 px-10">
        <input type="text" className="w-2/4 h-10 rounded-l-full p-2 border border-r-0  text-2xl outline-none border-gray-500 border-solid " />
        <button className="border py-2 px-6  outline-none rounded-r-full text-xl h-10 border-gray-500 bg-gray-100"><AiOutlineSearch/></button>
      </div>
      <div className="col-span-1 text-2xl">
        <FaUserAlt />
      </div>
    </div>
  );
};

export default Header;
