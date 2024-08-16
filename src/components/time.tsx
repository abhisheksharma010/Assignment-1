import { RootState } from "@/redux/store/store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateTimeFilter } from "@/redux/slices/filter";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineAccessTimeFilled as TimeIcon } from "react-icons/md";

const Time = () => {
  const timeFilter = useSelector(
    (state: RootState) => state.filterReducer.time
  );
  const dispatch = useDispatch();

  const options = [
    { name: "Last 2 days", value: "2" }
    { name: "Last 30 days", value: "30" },
    { name: "All", value: "all" },
  ];

  return (
    <Select
      value={timeFilter}
      onValueChange={(newValue) => dispatch(updateTimeFilter(newValue))}
    >
      <SelectTrigger className="w-[150px] bg-neutral-100">
        <TimeIcon className="text-lg" />
        <SelectValue placeholder="All" />
      </SelectTrigger>
      <SelectContent>
        {options.map((option, index) => (
          <SelectItem key={index} value={option.value}>
            {option.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Time;
