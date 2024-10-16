import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <div key={index} className="mb-6">
        {/* Main Comment */}
        <Comment data={comment} />

        {/* Nested Replies */}
        {comment.reply && comment.reply.length > 0 && (
          <div className="pl-8 mt-4">
            <div className="border-l-2 border-gray-300 pl-4">
              <CommentList comments={comment.reply} />
            </div>
          </div>
        )}
      </div>
    );
  });
};

export default CommentList;
