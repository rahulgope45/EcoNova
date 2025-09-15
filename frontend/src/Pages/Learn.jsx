import React from "react";
import learnbg from "/learnbg.png";

function Learn() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Image */}
      <div className="fixed top-30 left-1/2 transform -translate-x-1/2">
        <img
          src={learnbg}
          className="w-[300px] h-[300px] object-contain"
          alt="Learn Background"
        />
      </div>

      {/* Fixed Search Bar */}
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 w-[80%] max-w-md">
        <div className="flex items-center bg-gray-100 border border-gray-300 rounded-full px-4 py-2 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M9.5 17a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
            />
          </svg>
          <input
            type="text"
            placeholder="Ask Eco"
            className="ml-2 bg-transparent outline-none flex-1"
          />
        </div>
      </div>
    </div>
  );
}

export default Learn;
