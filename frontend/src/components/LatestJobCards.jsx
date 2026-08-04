import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer flex flex-col justify-between hover:border-[#6A38C2]/30 group"
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <h1 className="font-semibold text-gray-800 text-sm group-hover:text-[#6A38C2] transition-colors">{job?.company?.name}</h1>
          <span className="text-xs font-semibold text-gray-400 bg-gray-100/60 px-2.5 py-0.5 rounded-full border border-gray-200/50">India</span>
        </div>
        <h1 className="font-bold text-lg text-gray-900 group-hover:text-[#6A38C2]/95 transition-colors my-2">{job?.title}</h1>
        <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed mt-1">{job?.desciption}</p>
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-100/60">
        <Badge className="text-blue-600 bg-blue-50/50 border border-blue-100 hover:bg-blue-50 font-bold" variant="outline">
          {job?.position} Positions
        </Badge>
        <Badge className="text-[#F83002] bg-red-50/50 border border-red-100 hover:bg-red-50 font-bold" variant="outline">
          {job?.jobType}
        </Badge>
        <Badge className="text-[#7209b7] bg-purple-50/50 border border-purple-100 hover:bg-purple-50 font-bold" variant="outline">
          {job?.salary}
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
