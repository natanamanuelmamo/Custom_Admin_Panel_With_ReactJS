import React from "react";
import { FaArrowUp, FaArrowDown, FaSearch, FaEllipsisV } from "react-icons/fa";


const Card = ({ title, value, subtitle, change, changeType }) => (
  <div className="bg-white shadow-md rounded-xl p-4 w-full">
    <div className="flex items-end justify-between text-sm text-gray-500">
      {title}
      <div
        className={`text-sm font-medium flex items-center ${
          changeType === "up" ? "text-green-500" : "text-red-500"
        }`}
      >
        {/* {changeType === "up" ? <FaArrowUp /> : <FaArrowDown />} */}
        {changeType === "up" ? (<FaArrowUp />) : changeType === "down" ? (<FaArrowDown />) : ""}
        <span className="ml-1">{change}</span>
      </div>
    </div>
    <div className="mt-2 text-2xl font-bold text-[#5225D0]">{value}</div>
    <div className="mt-2 text-xs text-gray-400">{subtitle}</div>
  </div>
);

export default Card;