import React from "react";
import {AiOutlineMessage, AiOutlineRetweet,AiOutlineHeart} from 'react-icons/ai'
import {BsBookmark, BsBarChartFill} from 'react-icons/bs'
import {GrBarChart} from 'react-icons/gr'
type Props = {};

const FeedCard = (props: Props) => {
  return (
    <div className="w-full border-b border-solid border-white">
      <div className="w-full flex flex-col p-6">
        <div className="flex items-center gap-4">
          <img
          className="w-14 h-14 rounded-full"
            src="https://pbs.twimg.com/profile_images/1353802560293883911/lZ8BWbrb_400x400.jpg"
            alt=""
          />
          <div className="flex gap-2">
            <p className=" font-bold">Cherie Deville </p>
            <p className=" opacity-40 font-[200]">@CherieDeville</p>
            <p className="text-slate-600">. 12th Nov</p>
          </div>
        </div>
        <div className="px-12 py-4">
          <p>See what people are saying about my OnlyFans 🎉🎊👏🏼😍</p>
        </div>
        <div className="px-12 py-4">
          <img
            className="w-full h-[500px] object-cover rounded-3xl"
            src="https://pbs.twimg.com/card_img/1722346229131067392/LZh7wr1h?format=jpg&name=900x900"
            alt=""
          />
        </div>
        <div className="flex justify-evenly">
            <p className=" text-slate-400 text-[18px]"><AiOutlineMessage/></p>
            <p className=" text-slate-400 text-[18px]"><AiOutlineRetweet/></p>
            <p className=" text-slate-400 text-[18px]"><AiOutlineHeart/></p>
            <p className=" text-slate-400 text-[18px]"><BsBarChartFill/></p>
            <p className=" text-slate-400 text-[18px]"><BsBookmark/></p>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
