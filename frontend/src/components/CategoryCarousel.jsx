import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "Full Stack Developer",
];

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div>
      <Carousel className="w-[85%] sm:w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 lg:basis-1/3 flex justify-center p-2">
              <Button
                onClick={() => searchJobHandler(cat)}
                variant="outline"
                className="rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm text-gray-700 hover:text-white hover:bg-[#6A38C2] hover:border-[#6A38C2] shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-300 font-medium px-6 py-2 "
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
