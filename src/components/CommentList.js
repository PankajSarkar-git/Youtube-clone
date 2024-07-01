import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <div key={index} className="mb-4">
        {/* Main Comment */}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <Comment data={comment} />
        </div>

        {/* Nested Replies */}
        {comment.reply && (
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
