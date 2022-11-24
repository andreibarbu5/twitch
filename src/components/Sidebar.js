import React from "react";
import tv from "../assets/tv.jpg";

import goose1 from "../assets/goose1.webp";
import goose2 from "../assets/goose2.jpg";
import goose3 from "../assets/goose3.jpg";
import { GrChannel } from "react-icons/gr";
import Channel from "./Channel";

const Sidebar = () => {
  const channels = [
    { profile: tv, name: "DevLive" },
    { profile: goose1, name: "DevLive" },
    { profile: goose2, name: "DevLive" },
    { profile: goose3, name: "DevLive" },
    { profile: tv, name: "DevLive" },
    { profile: goose1, name: "DevLive" },
    { profile: goose2, name: "DevLive" },
    { profile: goose3, name: "DevLive" },
  ];
  return (
    <div className="sticky top-[59px] bg-[#efeff1]  p-2 border-r h-full z-20 ">
      {/* Title */}
      <div className="whitespace-nowrap flex justify-center">
        <p className="hidden lg:flex text-[12px] font-bold">
          RECOMMENDED CHANNELS
        </p>
        <div className="  lg:hidden">
          <GrChannel />
        </div>
      </div>
      {/* Recomended */}
      <div className="flex flex-col gap-2 pt-4">
        {channels.map((channel) => (
          <Channel profile={channel.profile} name={channel.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
