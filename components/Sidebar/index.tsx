"use client";
import React from "react";
import { BsTwitter, BsFillBookmarkFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
const Sidebar = () => {
  interface SidebarOption {
    id: number;
    title: string;
    icon: React.ReactNode;
  }
  const sideBarOptions: SidebarOption[] = [
    {
      id: 1,
      title: "Home",
      icon: <AiFillHome />,
    },
    {
      id: 2,
      title: "Explore",
      icon: <FaHashtag />,
    },
    {
      id: 3,
      title: "Notifications",
      icon: <IoMdNotifications />,
    },
    {
      id: 4,
      title: "Bookmark",
      icon: <BsFillBookmarkFill />,
    },
    {
      id: 5,
      title: "Profile",
      icon: <FaUserAlt />,
    },
  ];
  return (
    <div className="w-full pt-[3rem]">
      <div className="w-full flex flex-col items-start gap-7">
        <div className=" text-[30px] p-[10px]">
          <BsTwitter />
        </div>
        <div className="flex flex-col gap-10">
          {sideBarOptions.map((ele: SidebarOption) => {
            return (
              <div
                key={ele.id}
                className="p-[10px] transition-all flex gap-4 items-center cursor-pointer hover:bg-[#5e636e] hover:rounded-full"
              >
                <p className=" text-[20px]">{ele.icon}</p>
                <p className="text-[20px]">{ele.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
