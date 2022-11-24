import React from "react";
import tv from "../assets/tv.jpg";
import chatting from "../assets/chatting.jpg";
import Card from "./Card";

const Cards = () => {
  const cards = [
    { title: "Let's Talk", image: tv },
    { title: "Video Games", image: tv },
    { title: "Let's Talk", image: tv },
    { title: "Let's Talk", image: tv },
    { title: "Let's Talk", image: tv },
    { title: "Let's Talk", image: tv },
    { title: "Video Games", image: tv },
    { title: "Let's Talk", image: tv },
    { title: "Let's Talk", image: tv },
    { title: "Let's Talk", image: tv },
    { title: "Let's Talk", image: tv },
    { title: "Video Games", image: tv },
    { title: "Let's Talk", image: tv },
    { title: "Let's Talk", image: tv },
    { title: "Let's Talk", image: tv },
    { title: "Video Games", image: tv },
    { title: "Let's Talk", image: tv },
    { title: "Let's Talk", image: tv },
    { title: "Let's Talk", image: tv },
  ];
  return (
    <div>
      {/* Title */}
      <div className="w-full font-bold text-[20px] flex items-center pt-12 gap-x-6  ">
        <p className="">Topics</p>
        <p>Creators</p>
      </div>
      {/* Filter */}
      <div className="flex items-center pt-2">
        <p className="font-bold ">Search by category</p>
        <input
          type="search"
          className="ml-4 outline-0 bg-[#e6e6e6] p-1.5 rounded-full  pl-4"
          placeholder="Search by category"
        />
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3   xl:grid-cols-4 xxl:grid-cols-5  xxxl:grid-cols-6 4xl:grid-cols-7 pt-5 gap-4 pb-12">
        {cards.map((card) => (
          <Card title={card.title} image={card.image} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
