import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const news = [
    {
      _id: "1",
      title: "Breaking News: Major Event Unfolds in the City",
    },
    {
      _id: "2",
      title: "Breaking News: New Policy Announced by the Government",
    },
    {
      _id: "3",
      title: "Breaking News: Sports Team Wins Championship",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className=" bg-gray-200 text-black py-2 px-4 flex items-center gap-4">
        <button className="flex items-center justify-center  px-4 py-2 rounded-xl bg-white text-red-600 font-bold">
          Latest
        </button>
        <Marquee pauseOnHover={true}>
          {news.map((item) => (
            <p key={item._id} className="px-8">
              {item.title}
            </p>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
