import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);
  return (
    <div className="overflow-x-auto w-full rounded-xl border border-gray-250 bg-white">
      <Table>
        <TableCaption className="pb-4 text-xs font-semibold text-gray-400">
          A list of your applied jobs
        </TableCaption>
        <TableHeader className="bg-gray-50/75">
          <TableRow className="border-b border-gray-150">
            <TableHead className="font-semibold text-gray-600 py-3.5 pl-6">
              Date
            </TableHead>
            <TableHead className="font-semibold text-gray-600 py-3.5">
              Job Role
            </TableHead>
            <TableHead className="font-semibold text-gray-600 py-3.5">
              Company
            </TableHead>
            <TableHead className="text-right font-semibold text-gray-600 py-3.5 pr-6">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs.length <= 0 ? (
            <TableRow>
              <TableCell
                colSpan={4}
                className="text-center py-8 font-medium text-gray-400"
              >
                You haven't applied to any jobs yet.
              </TableCell>
            </TableRow>
          ) : (
            allAppliedJobs.map((appliedJob) => (
              <TableRow
                key={appliedJob._id}
                className="hover:bg-gray-50/50 transition-colors border-b border-gray-100 last:border-0"
              >
                <TableCell className="py-4 pl-6 font-medium text-gray-500">
                  {appliedJob?.createdAt?.split("T")[0]}
                </TableCell>
                <TableCell className="py-4 font-semibold text-gray-800">
                  {appliedJob.job?.title}
                </TableCell>
                <TableCell className="py-4 font-medium text-gray-600">
                  {appliedJob.job?.company?.name}
                </TableCell>
                <TableCell className="text-right py-4 pr-6">
                  <Badge
                    variant="outline"
                    className={`font-bold px-3 py-1 rounded-full text-xs shadow-premium ${
                      appliedJob?.status === "rejected"
                        ? "bg-red-50 text-red-600 border-red-150 hover:bg-red-50"
                        : appliedJob?.status === "pending"
                          ? "bg-amber-50 text-amber-600 border-amber-150 hover:bg-amber-50"
                          : "bg-emerald-50 text-emerald-600 border-emerald-150 hover:bg-emerald-50"
                    }`}
                  >
                    {appliedJob?.status?.toUpperCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
