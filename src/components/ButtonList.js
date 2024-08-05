import React, { useRef, useState } from "react";
import Button from "./Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const list = [
  "All",
  "Live",
  "Game",
  "Song",
  "Movie",
  "JavaScript",
  "React",
  "CSS",
  "Dance",
  "Cricket",
  "News",
  "Cooking",
  "Technology",
  "Education",
  "Comedy",
  "Travel",
  "DIY",
  "Fitness",
  "Health",
  "Beauty",
  "Fashion",
  "Animation",
  "Science",
  "Vlogs",
  "Tutorials",
  "Reviews",
  "Music Videos",
  "Interviews",
  "Documentaries",
  "Podcasts",
  "Sports Highlights",
  "ASMR",
  "History",
  "Nature",
  "Gaming",
  "Pets",
  "Art",
  "Photography",
  "Technology Reviews",
  "Life Hacks",
  "Storytime",
  "Memes",
  "Magic",
  "Parenting",
  "Language Learning",
  "Minimalism",
  "Gardening",
  "Motivational",
  "Finance",
  "Business",
  "Careers",
  "Environmental",
  "Meditation",
  "Philosophy",
  "Literature",
  "Astrology",
  "Psychology",
];

const ButtonList = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="flex items-center mt-2 p-4 ">
      <button onClick={scrollLeft} className="mr-2">
        <IoIosArrowBack size={20} />
      </button>
      <div ref={scrollRef} className="flex overflow-x-scroll no-scrollbar">
        {list.map((item, index) => (
          <div onClick={() => handleButtonClick(index)}>
            <Button
              name={item}
              key={item}
              activeIndex={activeIndex}
              index={index}
            />
          </div>
        ))}
      </div>
      <button onClick={scrollRight} className="ml-2">
        <IoIosArrowForward size={20} />
      </button>
    </div>
  );
};

export default ButtonList;
