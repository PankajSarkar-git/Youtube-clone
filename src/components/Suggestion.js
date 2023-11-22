import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Suggestion = ({ suggestion }) => {
  return (
    <li className="border-t p-1 hover:bg-gray-300 flex">
      <AiOutlineSearch className="mr-3 mt-2" />
      {suggestion}
    </li>
  );
};

export default Suggestion;
