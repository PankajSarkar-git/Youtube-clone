import React from "react";
import SideBar from "./SideBar.js";
import { Outlet } from "react-router-dom";
import Header from "./Header.js";

const Body = () => {
  return (
    <div className="no-scrollbar w-full">
      <Header />
      <div className="flex w-full">
        <div className=" bg-gray-200">
          <SideBar />
        </div>
        <div className="overflow-hidden w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
