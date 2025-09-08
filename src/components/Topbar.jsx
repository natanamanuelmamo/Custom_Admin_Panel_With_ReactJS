import React from "react";
import { FaSearch, FaBell, FaCog, FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Topbar = ({ pageTitle = "Dashboard" }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#2C234D] px-6 py-4 flex items-center justify-between">
      {/* Page Title */}
      <h1 className="text-xl font-semibold text-[#A98BFE]">{pageTitle}</h1>

      {/* Right Side Controls */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search anything here..."
            className="pl-4 pr-10 py-2 rounded-full bg-white text-sm outline-none w-72"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Notification */}
        <button onClick={() => navigate("/notifications")} className="text-white text-lg hover:text-[#A98BFE] transition">
          <FaBell />
        </button>

        {/* Settings */}
        <button onClick={() => navigate("/settings")} className="text-white text-lg hover:text-[#A98BFE] transition">
          <FaCog />
        </button>

        {/* Profile Section */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="text-sm text-white leading-tight text-left hidden sm:block">
            <p className="font-medium">Hawi Cruz</p>
            <p className="text-gray-300 text-xs">Hawi@xcommerce.com</p>
          </div>
          <FaAngleDown className="text-white ml-1" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
