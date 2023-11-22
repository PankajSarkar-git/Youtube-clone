import React from "react";
import CommentList from "./CommentList";

const commentData = [
  {
    name: "Pankaj Sarkar",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
    reply: [],
  },
  {
    name: "Pankaj Sarkar",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
    reply: [
      {
        name: "Pankaj Sarkar",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
        reply: [],
      },
      {
        name: "Pankaj Sarkar",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
        reply: [
          {
            name: "Pankaj Sarkar",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
            reply: [],
          },
          {
            name: "Pankaj Sarkar",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
            reply: [
              {
                name: "Pankaj Sarkar",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
                reply: [],
              },
              {
                name: "Pankaj Sarkar",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
                reply: [
                  {
                    name: "Pankaj Sarkar",
                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
                    reply: [],
                  },
                  {
                    name: "Pankaj Sarkar",
                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
                    reply: [],
                  },
                ],
              },
              {
                name: "Pankaj Sarkar",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
                reply: [],
              },
              {
                name: "Pankaj Sarkar",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
                reply: [],
              },
            ],
          },
          {
            name: "Pankaj Sarkar",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
            reply: [],
          },
        ],
      },
      {
        name: "Pankaj Sarkar",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
        reply: [],
      },
    ],
  },
  {
    name: "Pankaj Sarkar",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
    reply: [],
  },
  {
    name: "Pankaj Sarkar",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
    reply: [
      {
        name: "Pankaj Sarkar",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
        reply: [],
      },
      {
        name: "Pankaj Sarkar",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
        reply: [
          {
            name: "Pankaj Sarkar",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
            reply: [],
          },
          {
            name: "Pankaj Sarkar",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
            reply: [],
          },
          {
            name: "Pankaj Sarkar",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
            reply: [
              {
                name: "Pankaj Sarkar",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
                reply: [],
              },
              {
                name: "Pankaj Sarkar",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
                reply: [],
              },
              {
                name: "Pankaj Sarkar",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
                reply: [],
              },
            ],
          },
        ],
      },
      {
        name: "Pankaj Sarkar",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
        reply: [],
      },
    ],
  },
  {
    name: "Pankaj Sarkar",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
    reply: [],
  },
  {
    name: "Pankaj Sarkar",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
    reply: [],
  },
  {
    name: "Pankaj Sarkar",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
    reply: [],
  },
  {
    name: "Pankaj Sarkar",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam reprehenderit eos voluptatem.",
    reply: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-2 p-5 bg-gray-50">
      <h1 className="text-2xl font-bold ">Comments:</h1>
      <CommentList comments ={commentData} />
    </div>
  );
};

export default CommentsContainer;
