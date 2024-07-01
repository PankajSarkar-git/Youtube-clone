import React from "react";
import SideBar from "./SideBar.js";
import { Outlet } from "react-router-dom";
import Header from "./Header.js";

const Body = () => {
  return (
    <div className="">
      <Header />
      <div className="flex flex-col md:flex-row ">
        <div className=" bg-gray-200">
          <SideBar />
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
