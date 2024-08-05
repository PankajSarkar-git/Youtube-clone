import React, { useEffect, useState } from "react";
import Chatmsg from "./Chatmsg";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/LiveChatSlice";
import { generateRandomName, getRandomString } from "../utils/helper";

const LiveChat = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const liveChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("api call");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: getRandomString(9),
        })
      );
    }, 10000);
    return () => clearInterval(i);
  }, []);
  function submitHandel() {
    dispatch(
      addMessage({
        name: "Pankaj",
        message: text,
      })
    );
    setText("");
  }
  return (
    <div className="w-full h-[500px] border border-black bg-slate-100">
      <div className="w-full h-[466px] border border-black bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {liveChatMessages &&
          liveChatMessages.map((item, index) => (
            <Chatmsg key={index} name={item.name} mesg={item.message} />
          ))}
      </div>
      <form
        className="w-full flex"
        onSubmit={(e) => {
          e.preventDefault();
          submitHandel();
        }}
      >
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          name=""
          id=""
          value={text}
          className="h-8 p-1 w-full"
        />
        <button type="submit" className="bg-green-500 p-1">
          send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
