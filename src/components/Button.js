import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-6 py-3 m-2 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 ease-in-out">
        {name}
      </button>
    </div>
  );
};

export default Button;
