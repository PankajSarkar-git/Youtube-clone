import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <div key={index}>
        <Comment  data={comment} />
        <div className=" border-l border-black pl-5 ml-5">
          <CommentList comments={comment.reply}  />
        </div>
      </div>
    );
  });
};

export default CommentList;
