import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex gap-3 my-5 shadow-sm bg-gray-50 p-4 rounded-lg transition-all hover:shadow-md hover:bg-gray-100">
      <BiSolidUserCircle className="text-4xl text-gray-500" />
      <div>
        <p className="text-lg font-semibold text-gray-900">{name}</p>
        <p className="mt-1 text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
