import React from "react";
import CommentList from "./CommentList";

const commentData = [
  {
    name: "John Doe",
    text: "This video was super informative! Thanks for breaking it down so well.",
    reply: [],
  },
  {
    name: "Alice Nguyen",
    text: "Amazing content! I’ve been looking for something like this. Keep up the good work!",
    reply: [
      {
        name: "David Kim",
        text: "Totally agree! This channel is so underrated.",
        reply: [],
      },
      {
        name: "Jessica Lee",
        text: "I’ve learned more here than from any other video. Subscribed!",
        reply: [
          {
            name: "Alice Nguyen",
            text: "Same here! It’s now one of my favorite channels.",
            reply: [],
          },
        ],
      },
    ],
  },
  {
    name: "Robert Michaels",
    text: "I think there’s a mistake at 2:45. Can you clarify what you meant?",
    reply: [],
  },
  {
    name: "Sophie Turner",
    text: "Loved the explanation! The way you simplify complex topics is incredible.",
    reply: [
      {
        name: "Jake Adams",
        text: "Yes! It’s the best channel for learning this stuff.",
        reply: [],
      },
    ],
  },
  {
    name: "Laura Stevens",
    text: "Could you make a follow-up video on this topic? I’d love to see more examples.",
    reply: [],
  },
  {
    name: "Chris Johnson",
    text: "This deserves way more views! Excellent production quality too.",
    reply: [],
  },
  {
    name: "Emily Clark",
    text: "The editing and animations are top-notch! Super helpful video.",
    reply: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-4 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Comments</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
