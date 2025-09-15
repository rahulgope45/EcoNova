import React from 'react';
import { Droplet, Recycle, TreePine } from "lucide-react";
import greenbg1 from "/greenbg1.png";
import greenbg2 from "/greenbg2.png";
import account3 from "/Account3.jpg";

function FirstCard() {
    return (
        <div className='flex flex-col justify-center '>
            {/* The main card container with a fixed size and layout adjustments */}
            <div className="bg-green-100/20 rounded-2xl shadow-lg p-6 w-[795px] h-[595px] flex flex-col items-center justify-center gap-4">
                
                {/* Profile image with centering and size classes */}
                <img
                    src={account3}
                    className="w-[192px] h-[192px] rounded-full object-cover"
                    alt="account"
                />

                {/* User's name */}
                <p className="font-bold text-3xl text-blue-900">Rony</p>

                {/* User's level */}
                <p className="text-2xl text-blue-900">Level - Beginner</p>

                {/* Progress section title */}
                <p className="mt-4 text-2xl font-medium text-black">
                    Progress to Next Level
                </p>

                {/* Progress bar container */}
                <div className="w-full h-3 bg-gray-200 rounded-full mt-2 mb-2">
                    {/* Progress bar fill */}
                    <div className="h-3 bg-blue-700 rounded-full w-[60%]"></div>
                </div>

                {/* Eco points display */}
                <p className="font-semibold text-blue-900 bg-blue-100 px-4 py-1 rounded-lg text-3xl mt-3">
                    🌍 1200 Eco Points
                </p>
            </div>
            <div className="bg-green-100/20 rounded-2xl shadow-lg p-6 w-[795px] h-[298px] flex flex-col  gap-4 mt-10 mb-10">
             <h3 className="font-bold text-2xl mb-4 text-blue-900">
              Your Eco Impact
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <TreePine className="text-green-600" />
                Trees Planted: <span className="font-semibold">3</span>
              </li>
              <li className="flex items-center gap-3">
                <Recycle className="text-yellow-600" />
                Waste Recycled: <span className="font-semibold">5 kg</span>
              </li>
              <li className="flex items-center gap-3">
                <Droplet className="text-blue-600" />
                Water Saved: <span className="font-semibold">12 L</span>
              </li>
            </ul>

            </div>

        </div>
    );
}

export default FirstCard;