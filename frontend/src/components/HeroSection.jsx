import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center">
      <div className="flex flex-col gap-6 my-16 px-4">
        <span className="mx-auto px-4 py-1.5 rounded-full bg-gradient-to-r from-red-50 to-orange-50 border border-red-100/80 text-[#F83002] font-semibold text-xs md:text-sm shadow-premium tracking-wide">
          🚀 India's No. 1 Job Portal
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
          Search, Apply & <br className="hidden sm:inline" /> Get Your{" "}
          <span className="bg-gradient-to-r from-[#6A38C2] to-[#7209b7] bg-clip-text text-transparent">
            Dream Jobs
          </span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed px-2">
          Discover thousands of job opportunities from top companies. Search by
          skills, location, or role, apply with ease, and take the next step
          toward your dream career.
        </p>
        <div className="flex w-[90%] sm:w-[80%] md:w-[60%] lg:w-[42%] shadow-xl hover:shadow-2xl focus-within:shadow-2xl focus-within:ring-4 focus-within:ring-[#6A38C2]/15 border border-gray-150 pl-4 pr-1 py-1 rounded-full items-center gap-3 mx-auto bg-white transition-all duration-300">
          <input
            type="text"
            placeholder="Find your dream jobs..."
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full bg-transparent text-sm md:text-base text-gray-800 placeholder-gray-400 py-2 pl-2"
          />

          <Button
            onClick={searchJobHandler}
            className="rounded-full bg-[#6A38C2] hover:bg-[#52299a] shrink-0 p-3 h-10 w-10 flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <Search className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
