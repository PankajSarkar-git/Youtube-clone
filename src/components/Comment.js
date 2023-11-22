import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex gap-3 my-5 shadow-sm bg-gray-100 p-4 rounded-lg">
      <BiSolidUserCircle className="text-4xl" />
      <div className="">
        <p className="text-lg font-bold "> {name}</p>
        <p className="mt-1">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
