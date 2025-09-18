import React, { useState } from "react";
import {
  FaHome,
  FaChartLine,
  FaUserTie,
  FaCar,
  FaBullhorn,
  FaMoneyBill,
  FaShieldAlt,
  FaCog,
  FaChevronUp,
  FaChevronDown,
  FaEllipsisV,
  FaBroadcastTower
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to check active route
  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 min-h-screen bg-[#2C234D] flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <div className="text-3xl text-white font-bold px-6 py-6">AdmPan</div>

        <ul className="space-y-1 px-4">
          {/* Home toggle (with dropdown) */}
          <li
            className={`${
              isActive("/dashboard") || isActive("/analytics")
                ? "bg-[#A98BFE] text-white"
                : "text-white hover:bg-[#3A2D63]"
            } flex items-center px-4 py-2 rounded-lg font-semibold cursor-pointer`}
            onClick={() => setIsHomeOpen(!isHomeOpen)}
          >
            <FaHome className="mr-3" />
            Home
            {isHomeOpen ? (
              <FaChevronUp className="ml-auto" />
            ) : (
              <FaChevronDown className="ml-auto" />
            )}
          </li>

          {/* Home dropdown options */}
          {isHomeOpen && (
            <>
              <li
                className={`${
                  isActive("/dashboard")
                    ? "bg-[#A98BFE] text-white"
                    : "text-[#8F8AB5] hover:bg-[#3A2D63]"
                } pl-10 py-2 rounded-lg cursor-pointer`}
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </li>
              <li
                className={`${
                  isActive("/analytics")
                    ? "bg-[#A98BFE] text-white"
                    : "text-[#8F8AB5] hover:bg-[#3A2D63]"
                } pl-10 py-2 rounded-lg cursor-pointer`}
                onClick={() => navigate("/analytics")}
              >
                Analytics
              </li>
            </>
          )}

          {/* Other menu items */}
          <li
            className={`${
              isActive("/analytics") ? "bg-[#A98BFE] text-white" : "text-white hover:bg-[#3A2D63]"
            } flex items-center px-4 py-2 rounded-lg cursor-pointer`}
            onClick={() => navigate("/analytics")}
          >
            <FaChartLine className="mr-3" />
            Analytics
          </li>
          <li
            className={`${
              isActive("/page1") ? "bg-[#A98BFE] text-white" : "text-white hover:bg-[#3A2D63]"
            } flex items-center px-4 py-2 rounded-lg cursor-pointer`}
            onClick={() => navigate("/page1")}
          >
            <FaUserTie className="mr-3" />
            Sample Page 1
          </li>
          <li
            className={`${
              isActive("/drivers") ? "bg-[#A98BFE] text-white" : "text-white hover:bg-[#3A2D63]"
            } flex items-center px-4 py-2 rounded-lg cursor-pointer`}
            onClick={() => navigate("/drivers")}
          >
            <FaBullhorn className="mr-3" />
            My Option 2
          </li>
          <li
            className={`${
              isActive("/campaigns") ? "bg-[#A98BFE] text-white" : "text-white hover:bg-[#3A2D63]"
            } flex items-center px-4 py-2 rounded-lg cursor-pointer`}
            onClick={() => navigate("/campaigns")}
          >
            <FaBullhorn className="mr-3" />
            My Option 3
          </li>
          <li
            className={`${
              isActive("/revenue") ? "bg-[#A98BFE] text-white" : "text-white hover:bg-[#3A2D63]"
            } flex items-center px-4 py-2 rounded-lg cursor-pointer`}
            onClick={() => navigate("/revenue")}
          >
            <FaMoneyBill className="mr-3" />
            My Option 4
          </li>

          <li
            className={`${
              isActive("/create_message") ? "bg-[#A98BFE] text-white" : "text-white hover:bg-[#3A2D63]"
            } flex items-center px-4 py-2 rounded-lg cursor-pointer`}
            onClick={() => navigate("/create_message")}
          >
            <FaBroadcastTower className="mr-3" />
            My Option 5
          </li>

          <li
            className={`${
              isActive("/logs") ? "bg-[#A98BFE] text-white" : "text-white hover:bg-[#3A2D63]"
            } flex items-center px-4 py-2 rounded-lg cursor-pointer`}
            onClick={() => navigate("/logs")}
          >
            <FaShieldAlt className="mr-3" />
            My Option 6
          </li>
          <li
            className={`${
              isActive("/settings") ? "bg-[#A98BFE] text-white" : "text-white hover:bg-[#3A2D63]"
            } flex items-center px-4 py-2 rounded-lg cursor-pointer`}
            onClick={() => navigate("/settings")}
          >
            <FaCog className="mr-3" />
            Settings
          </li>
        </ul>
      </div>

      {/* Bottom Profile */}
      <div className="px-4 py-5">
        <div className="flex items-center justify-between bg-[#A98BFE] text-white px-3 py-2 rounded-lg">
          <div className="flex items-center space-x-3">
            <img
              src="/avatar.jpg"
              alt="avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-sm">Hawi Cruz</p>
              <p className="text-xs">Hawi@commerce.com</p>
            </div>
          </div>
          <FaEllipsisV className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
