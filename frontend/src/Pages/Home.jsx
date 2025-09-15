import { Droplet, Recycle } from "lucide-react";
import greenbg1 from "/greenbg1.png";
import greenbg2 from "/greenbg2.png";


import FirstCard from "../components/FirstCard";

export default function Home() {
  return (
    <div className="relative min-h-screen  p-6">
      {/* Background Images */}
      <img
        src={greenbg1}
        className="absolute -bottom-30 right-240  pointer-events-none"
        alt="background"
      />
      <img
        src={greenbg2}
        className="absolute -bottom-110 -right-40 w-80  pointer-events-none select-none w-[736px] h-[490px] "
        alt="background"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 grid md:grid-cols-2 gap-8 mt-30">
        {/* Left Section */}
        <div className="space-y-6">
          {/* Welcome Section */}
          <div className="absolute -bottom-120 left-20  pointer-events-none select-none w-[736px] h-[490px] ">
            <h1 className="text-5xl font-bold text-blue-900">Welcome back,</h1>
            <h2 className="text-3xl font-bold text-black mb-4">Rony</h2>
            <p className="text-sm text-black mt-2">
              <span className="font-semibold">Today’s Tip - </span><br/>
              Carry a reusable bottle instead of buying plastic.
            </p>
          </div>

          
        </div>

        {/* Right Section - User Card */}
        <div className="absolute -bottom-100 right-20  pointer-events-none select-none w-[736px] h-[490px] ">
            <FirstCard/>
        </div>
      </div>
    </div>
  );
}
