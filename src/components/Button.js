import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ name, activeIndex, index }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          if (name !== "All") {
            navigate(`/results?v=${name}`);
          }else{
          navigate(`/`);
          }
        }}
        className={` ${
          activeIndex === index
            ? "bg-black text-white"
            : "text-black bg-gray-400"
        }  px-4 py-1 m-2  whitespace-nowrap font-semibold rounded-lg shadow-lg hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-300 ease-in-out`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
