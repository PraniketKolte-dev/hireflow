import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1.5 active:scale-[0.99] transition-all duration-300 flex flex-col justify-between hover:border-[#6A38C2]/30 group">
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-2.5 py-0.5 rounded-full border border-gray-200/50">
            {daysAgoFunction(job?.createdAt) === 0
              ? "Today"
              : `${daysAgoFunction(job?.createdAt)} days ago`}
          </span>
        </div>

        <div className="flex items-center gap-3 my-3">
          <div className="p-1 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center shrink-0">
            <Avatar className="h-10 w-10">
              <AvatarImage src={job?.company?.logo} />
            </Avatar>
          </div>
          <div>
            <h1 className="font-semibold text-gray-800 text-sm group-hover:text-[#6A38C2] transition-colors">{job?.company?.name}</h1>
            <p className="text-xs text-gray-400 font-medium">India</p>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-lg text-gray-900 group-hover:text-[#6A38C2]/95 transition-colors my-2">{job?.title}</h1>
          <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">{job?.description}</p>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-100/60">
          <Badge className="text-blue-600 bg-blue-50/50 border border-blue-100 hover:bg-blue-50 font-bold" variant="outline">
            {job?.position} Positions
          </Badge>
          <Badge className="text-[#F83002] bg-red-50/50 border border-red-100 hover:bg-red-50 font-bold" variant="outline">
            {job?.jobType}
          </Badge>
          <Badge className="text-[#7209b7] bg-purple-50/50 border border-purple-100 hover:bg-purple-50 font-bold" variant="outline">
            {job?.salary}LPA
          </Badge>
        </div>

        <div className="flex items-center gap-4 mt-4 pt-2">
          <Button
            onClick={() => navigate(`/description/${job?._id}`)}
            variant="outline"
            className="w-full rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-400 font-semibold shadow-sm hover:scale-[1.02] active:scale-95 transition-all duration-200"
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Job;
