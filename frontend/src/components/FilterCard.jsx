import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Banglore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: [
      "Full Stack Developer",
      "Data Analyst",
      "Data Scientist",
      "DevOps Engineer",
    ],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42k-1lakh", "1lakh to 5lakh"],
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();
  const changeHandler = (value) => {
    setSelectedValue(value);
  };
  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);
  return (
    <div className="w-full bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-gray-200/60 shadow-sm">
      <h1 className="font-bold text-lg text-gray-800">Filter Jobs</h1>
      <hr className="mt-3 border-gray-150" />
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((data, index) => (
          <div key={index} className="mt-4">
            <h1 className="font-semibold text-xs text-gray-400 uppercase tracking-wider mb-2">{data.filterType}</h1>
            {data.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`;
              return (
                <div key={idx} className="flex items-center space-x-2.5 my-2">
                  <RadioGroupItem value={item} id={itemId} className="text-[#6A38C2] border-gray-300 focus:ring-[#6A38C2]/40" />
                  <Label htmlFor={itemId} className="text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer">{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
