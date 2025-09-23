import React, { useState } from "react";
import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';

const SampleForm = () => {
  const [target, setTarget] = useState("Both");

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar pageTitle="Sample Message Form" />
        <div className="flex-1 p-10">
          <div className="bg-white rounded-xl shadow-md p-8 w-full mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Sample Message Form
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Compose and send a message to your users.
            </p>

            {/* Message Content */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message Content
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-md p-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A98BFE] resize-none"
                rows={6}
                placeholder={`Enter your broadcast message here (e.g., 'Happy Holidays!', 'System Update: New features launching soon!')`}
              />
            </div>

            {/* Broadcast To */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Send To
              </label>
              <div className="flex gap-4">
                {["Option One", "Option Two", "Other"].map((option) => (
                  <label
                    key={option}
                    className={`flex-1 cursor-pointer border rounded-lg px-4 py-3 text-center text-sm font-medium ${
                      target === option
                        ? "bg-[#E5DBFF] border-[#A98BFE] text-[#4B2FAA]"
                        : "bg-white border-gray-300 text-gray-700"
                    } transition`}
                  >
                    <input
                      type="radio"
                      name="target"
                      value={option}
                      className="hidden"
                      checked={target === option}
                      onChange={() => setTarget(option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Send Button */}
            <div className="flex justify-end">
              <button
                className="bg-[#7E4EFE] hover:bg-[#6933F0] transition text-white px-6 py-3 rounded-md flex items-center gap-2 font-medium text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-9.6-5.78A1 1 0 003.5 6.28v11.44a1 1 0 001.652.812l9.6-5.78a1 1 0 000-1.684z"
                  />
                </svg>
                Send Broadcast
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleForm;
