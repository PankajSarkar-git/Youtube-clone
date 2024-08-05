import React from "react";

const Chatmsg = ({ name, mesg }) => {
  return (
    <div className="flex gap-2 items-center px-1 py-1">
      <img
        className="rounded-full w-10"
        src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
        alt=""
      />
      <div className="flex items-center gap-2">
        <span className="font-bold text-lg ">{name}:</span>
        <h4 className="text-sm ">{mesg}</h4>
      </div>
    </div>
  );
};

export default Chatmsg;
